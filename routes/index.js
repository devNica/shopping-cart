var express = require('express');
var router = express.Router();
var Products = require('../models/Product');
var Cart = require('../models/cart');

router.get('/', function (req, res, next) {
  Products.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (let index = 0; index < docs.length; index += chunkSize) {
      productChunks.push(docs.slice(index, index + chunkSize));
    }

    res.render('shop/index', { title: 'Shoping Cart', products: productChunks });
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

router.get('/checkout', (req, res, next) => {
  if (!req.session.cart) {
    return res.redirect('/shoping-cart');
  }
  var cart = new Cart(req.session.cart);
  var total = parseFloat(cart.totalPrice).toFixed(2);
  res.render('shop/checkout', { total });
});

module.exports = router;
