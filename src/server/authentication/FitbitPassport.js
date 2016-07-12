const passport = require('passport');
const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
const fileHelper = require(__dirname + '/../fileHelper.js');
const config = require(fileHelper.apiKeyPath);
const db = require('../db/connection.js');

const addFitbitUser = (userData, done, accessToken, profile) => {
  db.none('insert into users(name, username, password, email, weight, bmi, goal)' +
  'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal})',
     userData)
  .then(() => {
    return done(null, {
      accessToken: accessToken,
      profile: profile
    });
  })
  .catch((error) => {
    console.log(error);
    return done(error, null);
  });
};

const checkIfUserInDb = (userData, done, accessToken, profile) => {
  db.one('select * from users where username=${username}', userData)
    .then(() => (
      done(null, {
        accessToken: accessToken,
        profile: profile
      })
    ))
    .catch((error) => {
      console.log(error);
      addFitbitUser(userData, done, accessToken, profile);
    });
};

passport.use(new FitbitStrategy({
  clientID: config.Fitbit.clientID,
  clientSecret: config.Fitbit.clientSecret,
  scope: ['activity', 'heartrate', 'location', 'profile', 'sleep'],
  callbackURL: config.Fitbit.callbackURL
}, 
  (accessToken, refreshToken, profile, done) => {
    const userData = {
      name: profile._json.user.fullName,
      username: profile._json.user.displayName,
      password: profile._json.user.displayName,
      email: profile._json.user.gender,
      weight: profile._json.user.weight,
      height: profile._json.user.height,
      bmi: 21.3,
      goal: accessToken
    };
    process.nextTick(() => {
      checkIfUserInDb(userData, done, accessToken, profile);
    });
  })
);

passport.serializeUser((user, done) => {
  const userObj = {
    accessToken: user.accessToken,
    provider: user.profile.provider,
    id: user.profile.id,
    username: user.profile.displayName
  };
  done(null, userObj);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
