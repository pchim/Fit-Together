const Promise = require('bluebird');
const fetch = require('isomorphic-fetch');

exports.getUsername = function (accessToken) {
  var userTokenURL = 'https://api.moves-app.com/api/1.1/user/summary/daily/20160629?access_token=' + accessToken;
  fetch(userTokenURL)
    .then(function (response) {
      if (response.status >= 400) {
        return Promise.reject('Error in retrieving data from the server.');
      }
      return response.json();
    })
    .then(function (json) {
      return Promise.resolve(json);
    });
};

