/* eslint-disable */
const db = require('../db/connection.js');
const redis = require('redis');
const bluebird = require('bluebird');
const url = require('url');
let hostVar = process.env.HOST || 'http://localhost:3000';
const host = url.parse(hostVar);
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const client = redis.createClient('6379', host.hostname);

client.on('error', (err) => {
  console.log('Error:', err);
});

// Current redisCopyTeams
// query Postgres to get all teams
// save array of teams in a hash (hmset) by team_id in Redis --> .hmsetAsync(team_id:xx:, team_obj)
exports.redisCopyTeams = (req, res) => {
  db.query('select * from teams')
    .then((data) => {
      data.forEach((team) => {
        client.hmsetAsync('team_id:' + team.id + ':', {
          team_id: team.id,
          name: team.name,
          description: team.description,
          team_icon: team.team_icon
        });
      });
    })
    .then(() => console.log('successfully added all teams to redis'))
    .catch((err) => console.log('error in sending to redis', err));
};

// Current redisCopyUsers
// query Postgres to get all users
// save array of users in a hash (hmset) by user_id in Redis --> .hmsetAsync(user_id:#:, user_obj)
exports.redisCopyUsers = (req, res) => {
  db.query('select * from users')
    .then((data) => {
      data.forEach((user) => {
        client.hmsetAsync('user_id:' + user.id + ':', {
          user_id: user.id,
          name: user.name,
          user_icon: user.user_icon
        });
      });
    })
    .then(() => console.log('successfully added all users to redis'))
    .catch((err) => console.log('error in sending to redis', err));
};


// Current getUserTeams
// query Postgres to get all team_id's for given user
// save array of team_id's in a unsorted set (sadd) in Redis --> .saddAsync(user_id:xx:yes:, value)
// query sadd by user_id --> .smembersAsync(user_id:xx:yes:)
// use multi (transaction) to make multiple queries --> 
// -----> input (array of team_id's), output (array of team objects)
// send response to specified route
exports.getUserTeams = (req, res) => {
  client.smembersAsync('user_id:' + req.body.user_id + ':yes:')
    .then((test) => {
      if (test.length > 0) {
        console.log('Data from Redis Only');
        client.smembersAsync('user_id:' + req.body.user_id + ':yes:')
          .then((data) => {
            console.log('unordered set', data); // unordered set of team ids
            const keys = data.map((key) => 'team_id:' + key + ':');
            let multi = client.multi({ pipeline: false });
            keys.forEach((key, index) => {
              multi = multi.hgetall(key);
            });
            return multi.execAsync();
          })
          .then((data) => {
            res.status(200)
              .json({
                status: 'success',
                data: data,
                message: 'successfully retrieved user\'s teams'
              });
          })
          .catch((err) => console.log('error in retrieving user teams', err)); 
      } else {
        console.log('Data from Postgres ---> Redis');
        db.query('select team_id from users_teams where user_id=${user_id}', req.body)
          .then((data) => {
            data.forEach((team) => {
              client.saddAsync('user_id:' + req.body.user_id + ':yes:', team.team_id);
            });
          })
          .then(() => client.smembersAsync('user_id:' + req.body.user_id + ':yes:'))
          .then((data) => {
            console.log('unordered set', data); // unordered set of team ids
            const keys = data.map((key) => 'team_id:' + key + ':');
            let multi = client.multi({ pipeline: false });
            keys.forEach((key, index) => {
              multi = multi.hgetall(key);
            });
            return multi.execAsync();
          })
          .then((data) => {
            console.log('DATA inside redis teams', data);
            res.status(200)
              .json({
                status: 'success',
                data: data,
                message: 'successfully retrieved user\'s teams'
              });
          })
          .catch((err) => console.log('error in retrieving user teams', err));   
      }
    })
    .catch((err) => console.log('error redis query test', err)); 
};

// Current getOtherTeams
// query Postgres to get all team_id's not from give user
// save array of team_id's in a unsorted set (sadd) in Redis --> .saddAsync(user_id:xx:no:, value)
// query sadd by user_id --> .smembersAsync(user_id:xx:no:)
// use multi (transaction) to make multiple queries --> input (array of team_id's), output (array of team objects)
// send response to specified route
exports.getOtherTeams = (req, res) => {
  client.smembersAsync('user_id:' + req.body.user_id + ':no:')
    .then((test) => {
      if (test.length > 0) {
        console.log('Data from Redis Only');
        client.smembersAsync('user_id:' + req.body.user_id + ':no:')
          .then((data) => {
            console.log('unordered set', data); // unordered set of team ids
            const keys = data.map((key) => 'team_id:' + key + ':');
            let multi = client.multi({ pipeline: false });
            keys.forEach((key, index) => {
              multi = multi.hgetall(key);
            });
            return multi.execAsync();
          })
          .then((data) => {
            res.status(200)
              .json({
                status: 'success',
                data: data,
                message: 'successfully retrieved other teams'
              });
          })
          .catch((err) => console.log('error in retrieving user teams', err));
      } else {
        console.log('Data from Postgres ---> Redis');
        db.query('select team_id from users_teams where user_id!=${user_id}', req.body)
          .then((data) => {
            data.forEach((team) => {
              client.saddAsync('user_id:' + req.body.user_id + ':no:', team.team_id);
            });
          })
          .then(() => client.smembersAsync('user_id:' + req.body.user_id + ':no:'))
          .then((data) => {
            console.log('unordered set', data); // unordered set of team ids
            const keys = data.map((key) => 'team_id:' + key + ':');
            let multi = client.multi({ pipeline: false });
            keys.forEach((key, index) => {
              multi = multi.hgetall(key);
            });
            return multi.execAsync();
          })
          .then((data) => {
            res.status(200)
              .json({
                status: 'success',
                data: data,
                message: 'successfully retrieved other teams'
              });
          })
          .catch((err) => console.log('error in retrieving user teams', err));
      }
    })
    .catch((err) => console.log('error redis query test', err)); 
};

// create new team
// -----given a user id, team --> add to users_teams and team table
// ----- add team to hash using hmset, add team_id to :yes sadd
// send a response after input to redis, but continue to postgres

exports.createTeam = (req, res) => {
  db.one('insert into teams(name, description, team_icon)' + 
      'values(${name}, ${description}, ${team_icon}) returning id', req.body)
    .then((teamId) => {
      const userTeam = {
        user_id: req.body.user_id,
        team_id: teamId.id
      };
      console.log('Successly inserted team', userTeam);
      return db.one('insert into users_teams(user_id, team_id)' + 
        'values(${user_id}, (select id from teams where id=${team_id}))' +
        ' returning team_id', userTeam);
    })
    .then((data) => {

      let multi = client.multi({ pipeline: false });
      multi = multi.hmset('team_id:' + data.team_id + ':', {
        team_id: data.team_id,
        name: req.body.name,
        description: req.body.description,
        team_icon: req.body.team_icon
      });
      multi = multi.sadd('user_id:' + req.body.user_id + ':yes:', data.team_id);
      multi = multi.hgetall('team_id:' + data.team_id + ':');
      return multi.execAsync(); 
    })
    .then((data) => {
      console.log('created team', data);
      res.status(200)
        .json({
          status: 'success',
          data: data[2],
          message: 'successfully created a new team'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};

// delete team
// given a user id, team_id --> remove row from users_teams
// 
// for the user --> remove team_id from :yes sadd
// for the user --> add team_id from :yes sadd

exports.leaveTeam = (req, res) => {
  console.log(req.body, 'req');
  db.none('delete from users_teams where team_id=${team_id} and user_id=${user_id}' , req.body)
    .then(() => {
      let multi = client.multi({ pipeline: false });
      multi = multi.sadd('user_id:' + req.body.user_id + ':no:', req.body.team_id);    
      multi = multi.srem('user_id:' + req.body.user_id + ':yes:', req.body.team_id);
      multi = multi.hgetall('team_id:' + req.body.team_id + ':');
      return multi.execAsync(); 
    })
    .then((data) => {
      res.status(201)
        .json({
          status: 'success',
          data: data[2],
          message: 'successfully deleted team'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};

// join team
// -----given a user id, team_id --> add to users_teams table
// -----add team_id to :yes sadd 
  // add team_id to sadd --> user_id:xx:yes
  // remove team_id to sadd --> user_id:xx:no

exports.joinTeam = (req, res) => {
  db.none('insert into users_teams(user_id, team_id)' + 
      ' values((select id from users where id=${user_id}),' +
      ' (select id from teams where id=${team_id}))', req.body)
    .then(() => {
      let multi = client.multi({ pipeline: false });
      multi = multi.sadd('user_id:' + req.body.user_id + ':yes:', req.body.team_id);    
      multi = multi.srem('user_id:' + req.body.user_id + ':no:', req.body.team_id);
      multi = multi.hgetall('team_id:' + req.body.team_id + ':');
      return multi.execAsync(); 
    })
    .then((data) => {
      console.log('joined team', data);
      res.status(200)
        .json({
          status: 'success',
          data: data[2],
          message: 'successfully joined team'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
}



// add team members to a team to a unsorted set ---> sadd
