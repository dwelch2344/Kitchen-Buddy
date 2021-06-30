const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const AnonymousStrategy = require('passport-anonymous').Strategy;

const { User } = require('../models/User');

const issuer = 'kitchenbuddy';
const audience = 'kitchenbuddy.local';
const secret = process.env.JWT_SECRET || 'mysecretsshhhhh';

const jwtFromRequest = (req) => {
    const header = req.headers ? req.headers.authorization : null;
    if (header && header.startsWith('Bearer ')) {
        const token = header.substring('Bearer '.length);
        return token;
    }
};
var opts = {
    secretOrKey: secret,
    jwtFromRequest,
    audience,
    issuer
};

const configurePassport = (app) => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ id: jwt_payload.sub }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
    passport.use(new AnonymousStrategy());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    app.use(passport.initialize());
    app.use(passport.session());
};


const sign = (claims, expiration = '2h') => {
    return jwt.sign({ data: claims }, secret, { issuer, audience, expiresIn: expiration });
};

// This is what you should use to secure any express routes
const defaultMiddleware = passport.authenticate(['jwt', 'anonymous'], { session: false, failureRedirect: '/login' });

// This will fail if you don't have a valid JWT token
const restrictedMiddleware = passport.authenticate(['jwt'], { session: false, failureRedirect: '/login' });

const graphqlContextCreator = () => async ({ req, res }) => {
    const ctx = {};

    // first: let the default passportjs authentication run
    // NOTE: failed authentication delegates to anonymous users
    await new Promise(resolve => defaultMiddleware(req, res, resolve));

    // next: if authentication produced a user (i.e. success) then add that for the resolvers
    if (req.user) {
        ctx.user = req.user;
        // likely don't need logout, as we're sessionless... 
        // https://jkettmann.com/authentication-and-authorization-with-graphql-and-passport
        ctx.logout = () => req.logout();
    }
    return ctx;
};


module.exports = {
    sign,
    defaultMiddleware,
    restrictedMiddleware,
    configurePassport,
    graphqlContextCreator
};