const fetch = require('node-fetch');
const fileHelper = require(__dirname + '/../fileHelper.js');
const config = require(fileHelper.apiKeyPath);
const mongoApiKey = config.mongo.key;
// used to post
const baseLinkMessages = 'https://api.mlab.com/api/1/databases/fit-together/collections/messages?apiKey=';
// used for get
const baseLinkMessagesQuery = 'https://api.mlab.com/api/1/databases/fit-together/collections/messages/';

exports.sendMessage = (req, res) => {
  const obj = {
    user_id: req.body.user_id,
    team_id: req.body.team_id,
    message: req.body.message,
    date_entered: req.body.date_entered,
    user_name: req.body.user_name,
    team_name: req.body.team_name
  };

  fetch(baseLinkMessages + mongoApiKey,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(() => {
      console.log('success');
      res.status(201)
        .json({
          status: 'success',
          data: obj,
          message: 'successfully retrieved user\'s teams'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};

exports.getMessagesByTeam = (req, res) => {
  // send team_id in req.body
  fetch(baseLinkMessages + mongoApiKey + '&q={"team_id":' + req.body.team_id + '}',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log('response 1', responseData);
      res.status(200)
        .json({
          status: 'success',
          data: responseData,
          message: 'successfully retrieved user\'s teams'
        });
    })
    .catch((err) => {
      console.log('Error', err);
      res.status(400);
    });
};
