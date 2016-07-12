const db = require('../db/connection.js');

// Insert a new team given a user_id and team
// [1] Given a team --> insert into the team table --> return team_id
// [2] Given a user_id and team_id --> insert into the users_teams table
exports.createTeam = (req, res) => {
  db.one('insert into teams(name, description, team_icon)' + 
      'values(${name}, ${description}, ${team_icon}) returning id', req.body)
    .then((teamId) => {
      const userTeam = {
        user_id: req.body.user_id,
        team_id: teamId.id
      };
      return db.one('insert into users_teams(user_id, team_id)' + 
        'values(${user_id}, (select id from teams where id=${team_id}))' +
        ' returning team_id', userTeam);
    })
    .then((data) => {
      delete req.body.user_id;
      req.body.id = data.team_id;
      res.status(201)
        .json({
          status: 'success',
          data: req.body,
          message: 'successfully created new team'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};

exports.deleteTeam = (req, res) => {
  db.none('delete from users_teams where team_id=${team_id}', req.body)
    .then(() => {
      db.none('delete from teams where id=${team_id}', req.body);
    })
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          data: req.body,
          message: 'successfully deleted team'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};

// Find a team and members given a user_id and team_id
// [1] Given a team_id --> get all user_id's of the team except for current user_id 
//     --> return array of users_id's
// [2] Given an array of the user_id's --> get all the users ---> return array of users 
// [3] Given a team_id --> get the team from the team table --> return team
// [4] Should send the team and array of users in the response

exports.findTeam = (req, res) => {
  db.tx((t) => {
    const q1 = t.query('select * from users where id=' + 
      '(select user_id from users_teams where team_id=${team_id} and ' + 
      'user_id!=${user_id})', req.body);
    const q2 = t.query('select * from teams where id=$(team_id)', req.body);
    return t.batch([q1, q2]);
  })
  .then((data) => {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'successfully found team and members'
      });
  })
  .catch((err) => {
    console.log('Error:', err);
    res.status(400);
  });
};

// Add user to a existing team
// [1] Given a user_id and team_id --> insert the user_id and team_id into the users_teams table
exports.addToTeam = (req, res) => {
  db.none('insert into users_teams(user_id, team_id)' +
      'values((select id from users where id=${user_id}), ' + 
      '(select id from teams where id=${team_id}))', req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'successfully added user to team'
        });
    })
    .catch((err) => {
      console.log('Error:', err);
      res.status(404);
    });
};
// given a team_id ---> get all members of a team

exports.getTeamMembers = (req, res) => {
  db.any('select * from users where id=ANY' + 
      '(select user_id from users_teams where team_id=${team_id} and ' + 
      'user_id!=${user_id})', req.body)
  .then((data) => {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'successfully found retreived team members'
      });
  })
  .catch((err) => {
    console.log('error in retreiving team members', err);
    res.status(400);
  });
};
