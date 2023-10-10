
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/Keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
        .then((existingUser) => {
            if(existingUser){
                //we have a record of given profile id
                done(null, existingUser);
            } else{
                new User ({googleId: profile.id})
                .save()
                .then(user => done(null,user));
            }
        });
    
    //console.log('Access Token:',accessToken);
    //console.log('Refresh Token:',refreshToken);
    //console.log('Profile:',profile);
}));