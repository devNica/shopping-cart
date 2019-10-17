var express = require('express');
var router = express.Router();
var Products = require('../models/Product');
var Cart = require('../models/cart');
var Order = require('../models/order');

router.get('/', function (req, res, next) {

  var successMsg = req.flash('success')[0];

  Products.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (let index = 0; index < docs.length; index += chunkSize) {
      productChunks.push(docs.slice(index, index + chunkSize));
    }

    res.render('shop/index', { title: 'Shoping Cart', products: productChunks, successMsg, noMessages: !successMsg });
  });


});

router.get('/add-to-cart/:id', (req, res, next) => {
  var productdId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  Products.findById(productdId, function (err, product) {
    if (err) {
      return res.redirect('/')
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');

  });

});

router.get('/reduce/:id', (req, res, next) => {
  var productdId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
  cart.reduceByOne(productdId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', (req, res, next) => {
  var productdId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
  cart.removeItems(productdId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});


router.get('/shopping-cart', (req, res, next) => {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {
      products: null
    });
  }

  var cart = new Cart(req.session.cart);
  var total = parseFloat(cart.totalPrice).toFixed(2);

  res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: total });
});

router.get('/checkout', isLoggedIn, (req, res, next) => {
  if (!req.session.cart) {
    return res.redirect('/shoping-cart');
  }
  var cart = new Cart(req.session.cart);
  var total = parseFloat(cart.totalPrice).toFixed(2);

  var errMsg = req.flash('error')[0];

  res.render('shop/checkout', { total, errMsg, noError: !errMsg });
});

router.post('/checkout', isLoggedIn, (req, res, next) => {

  if (!req.session.cart) {
    return res.redirect('/shoping-cart');
  }
  var cart = new Cart(req.session.cart);

  var amount = (cart.totalPrice).toFixed(2);

  var stripe = require('stripe')("sk_test_CqR2iFUWoeFoQXdzlnHtEK8n00L8tmfkXR");

  stripe.charges.create({
    amount: amount * 100,
    currency: 'usd',
    source: req.body.stripeToken,
    description: "Test Charge Lucas A. Marsell",
  }, (err, charge) => {
    //asynchronusly called
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/checkout');
    }

    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      paymentId: charge.id
    });

    order.save((err, result) => {

      req.flash('success', 'Successfuly bought product!');
      req.session.cart = null;
      res.redirect('/');


    });


  });

});

module.exports = router;


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}
