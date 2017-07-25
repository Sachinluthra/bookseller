var express = require('express');
var router = express.Router();

module.exports = function (router, passport) {


router.use(passport.initialize());
router.use(passport.session());

router.get('/', function(req, res, next) {
  res.send('HOME PAGE !!!');
});


router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/profile',
        failureRedirect: '/'}));

router.get('/profile',isLoggedIn, function (req, res) {
    console.log(req.session.passport.user);   //display mongodb id
   res.redirect('/');
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

router.post('/login',function (req, res, next) {

});


router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/profile');
    });

};


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
    {

        return next();
    }
    // flash messages
    res.send('Not user');

}