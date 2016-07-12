const db = require('../db/connection.js');

// Insert a new food given a user_id and food
// [1] Given a food --> insert into the food table --> return food_id
// [2] Given a user_id and food_id --> insert into the users_food table
exports.addSleep = (req, res) => {
  db.none('insert into sleep(duration, quality, date_performed, user_id)' + 
      ' values(${duration}, ${quality}, ${date_performed},' + 
      ' (select id from users where id=${user_id}))', req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'successfully added new sleep'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};

exports.getSleep = (req, res) => {
  req.body.user_id = 1;
  db.any('select users.id, sleep.date_performed, sleep.duration, ' +
    'sleep.quality from users, sleep where users.id=${user_id} ' +
    'and sleep.user_id=${user_id}', req.body)
    .then(user => {
      res.status(200)
        .json({
          status: 'success',
          data: user,
          message: 'Retrieved user sleep information!'
        });
    })
    .catch((err) => {
      console.error('error in retrieving user info: ', err);
    });
};

