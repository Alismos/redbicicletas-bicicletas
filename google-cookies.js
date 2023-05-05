var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
ExtractJwt = require('passport-jwt').ExtractJwt;

var TOKEN_SECRET = process.env.SECRET;

var cookieExtractor = function(req) {
    let token = null;
    if (req && req.cookies)
    {
      token = req.cookies['auth'];
    }
    return token;
};


var opts = {
jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
secretOrKey: TOKEN_SECRET,
};
passport.use(
'jwt',
new JwtStrategy(opts, (jwt_payload, done) => {
    try {
    console.log('jwt_payload', jwt_payload);
    done(null, jwt_payload);
    } catch (err) {
    done(err);
    }
}),
);