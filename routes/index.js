var express = require('express');
var router = express.Router();
var Products = require('../models/Product');


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



module.exports = router;
