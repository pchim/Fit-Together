/* eslint-disable */

const db = require('../db/connection.js');

const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const client = redis.createClient('6379', 'localhost');

client.on('error', (err) => {
  console.log('Error:', err);
});

const redisCopyTeams = (req, res) => {
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


redisCopyTeams();
