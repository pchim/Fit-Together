const db = require('../db/connection.js');

exports.getLeaderboardRanks = (req, res) => {
  db.many('select * from users order by points desc limit 5')
    .then(users => {
      res.status(200)
        .json({
          status: 'success',
          data: users,
          message: 'Retrieved ranked users!'
        });
    })
    .catch((err) => {
      console.error('error in retrieving ranked users: ', err);
    });
};
