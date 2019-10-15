var express = require('express');
var router = express.Router();
var Products = require('../models/Product');
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
  res.render('user/signup', { csrfToken: req.csrfToken() });
})

router.post('/user/signup', function (req, res, next) {
  res.redirect('/');
});

module.exports = router;
