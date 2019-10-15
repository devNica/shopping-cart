var express = require('express');
var router = express.Router();
var Products = require('../models/Product');
var passport = require('passport')
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);


/* GET home page. */
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


router.get('/user/signup', function (req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
})

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true,
}));

router.get('/user/profile', (req, res, next) => {
  res.render('user/profile');
});

router.get('/user/signin', (req, res, next) => {
  var messages = req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/user/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true,
}));

module.exports = router;
