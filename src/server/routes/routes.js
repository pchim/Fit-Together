const express = require('express');
const router = express.Router();
const FitbitPassport = require('../authentication/FitbitPassport');
const MovesPassport = require('../authentication/MovesPassport');
const passport = require('passport');
const flash = require('connect-flash');
const db = require('../db/connection.js');
const queryHelper = require('../queryHelper');
const activities = require('../controllers/activitiesCtrl');
const trivia = require('../controllers/triviaCtrl');
const tips = require('../controllers/tipsCtrl');
const leaderboard = require('../controllers/leaderboardCtrl');

// ------------ Controllers --------------- 
const users = require('../controllers/usersCtrl');
const teams = require('../controllers/teamsCtrl');
const sleep = require('../controllers/sleepCtrl');
const redis = require('../controllers/redisCtrl');
const mongo = require('../controllers/mongoCtrl');
const logMem = require('../controllers/memCtrl');
const logExercise = require('../controllers/exerciseCtrl');
const logFood = require('../controllers/foodCtrl');
const logSleep = require('../controllers/sleepCtrl');

/**  Users **/
router.post('/api/users', users.addUser);
router.post('/api/userteams', redis.getUserTeams);
router.post('/api/teammembers', teams.getTeamMembers);
router.post('/api/createteam', redis.createTeam);
router.post('/api/leaveteam', redis.leaveTeam);
router.post('/api/otherteams', redis.getOtherTeams);
router.post('/api/jointeam', redis.joinTeam);
router.post('/api/sendmessage', mongo.sendMessage);
router.post('/api/getmessages', mongo.getMessagesByTeam);
router.get('/api/users/:username', users.getUserInfo);
router.get('/api/usersleep', sleep.getSleep);
router.get('/api/users/:username', users.getUserInfo);
router.post('/api/addMem', logMem.addMem);
router.post('/api/addExercise', logExercise.addExercise);
router.post('/api/addFood', logFood.addFood);
router.post('/api/addSleep', logSleep.addSleep);

router.get('/api/user', (req, res) => {
  if (req.user) {
    db.any('select * from users where username=$1', [req.user.username])
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    console.error('error in adding user: ', error);
  });
  }
});

/** Tips **/
router.get('/api/tips', tips.getTips);

router.put('/api/user/points', users.updateUserPoints);

router.get('/api/leaderboard', leaderboard.getLeaderboardRanks);


/** Quizzes/Questions **/
router.get('/api/trivia/:category', trivia.getQuizQuestions);


/** GET USER STATS **/
router.get('/api/useractivities', activities.getActivities);

/**  Auth **/
router.get('/auth/fitbit',
  passport.authenticate('fitbit'));

router.get('/auth/fitbit/callback', 
  passport.authenticate('fitbit', { failureRedirect: '/login', failureFlash: true }),
  (req, res) => {
    if (req.user) {
      const userData = {
        accessToken: req.user.accessToken,
        id: req.user.profile.id,
        username: req.user.profile.displayName
      };
      // queryHelper.getUserData(userData.id, userData.accessToken);
      res.redirect('/dashboard');
    }
  }
);

router.get('/auth/moves', passport.authenticate('moves'));

router.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  (req, res) => {
    const username = req.user;
    res.redirect('/dashboard');
  }
);

router.get('/demo', (req, res) => {
  res.redirect('/dashboard');
});

router.get('/signout', (req, res) => {
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

router.get('/signup', 
  passport.authenticate('local-signup', {
    successRedirect: '/', 
    failureRedirect: '/signup',
    failureFlash: true 
  })
);

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/', 
  failureRedirect: '/login',
  failureFlash: true 
}));

module.exports = router;
