const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});

// router.get('/',
//   passport.authenticate('google', { failureRedirect: 'httpp://localhost:5000', failureMessage: true }),
//   function(req, res) {
//     res.redirect('/');
//   });

// router.get('/greetme', (req, res, next) => {
//  passport.authenticate('jwt', { session: false }, (err, user, info) => {
//    if (err) {
//      console.log('error is', err);
//      res.status(500).send('An error has occurred, we cannot greet you at the moment.');
//    }
//    else {
//      res.send({ success: true, fullName: `${user.name.givenName} ${user.name.familyName}` })
//    }
//  })(req, res, next);
// });

module.exports = router ;