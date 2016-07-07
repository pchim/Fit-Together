const db = require('../db/connection.js');

// Signup User
exports.addUser = (req, res) => {
  db.none('insert into users(name, username, password, email, age, weight, height, bmi, goal, points, user_icon, lat, lng)' +
  'values(${name}, ${username}, ${password}, ${email}, ${age}, ${weight}, ${height}, ${bmi}, ${goal}, ${points}, ${user_icon}, ${lat}, ${lng})',
    req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Inserted user into db',
          data: req.body
        });
    })
    .catch((err) => {
      console.error('error in adding user: ', err);
    });
};

exports.getUserInfo = (req, res) => {
  db.one('select * from users where username=${username}', req.params)
    .then(user => {
      res.status(200)
        .json({
          status: 'success',
          data: user,
          message: 'Retrieved user information!'
        });
    })
    .catch((err) => {
      console.error('error in retrieving user info: ', err);
    });
};

exports.updateUserPoints = (req, res) => {
  const points = parseInt(req.body.points, 10);
  db.one('update users set points = points + $1 where username=$2 returning *', [points, 'jjones'])
    .then((user) => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Successfully updated user info',
          data: user
        });
    })
    .catch((err) => {
      console.error('error in updating user info: ', err);
    });
};
