var express = require('express');
var router = express.Router();
var passport = require('passport')
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn, (req, res, next) => {
    res.render('user/profile');
});

router.get('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    req.redirect('/');
});

router.use('/', notLoggedIn, (req, res, next) => {
    next();
});

router.get('/signup', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true,
}));



router.get('/signin', (req, res, next) => {
    var messages = req.flash('error');
    res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true,
}));





module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}