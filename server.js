const express = require("express");
const app = express(); 
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const session = require("express-session");
const PORT = process.env.PORT || 5000;

const GITHUB_CLIENT_ID = "3420987e3ae3c9e82470"
const GITHUB_CLIENT_SECRET = "52d1f7e80dab83b7f1b14d04e0fe81c27ade2b66"

passport.use(
    new GitHubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback"
         },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));