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

module.exports = client;

// You have to promisify in the same js file that you make your query
// get all values in the db --> client.keysAsync('*')
// delete all values from connection's current db --> client.flushdbAsync()
// delete all values from all db's --> client.flushdbAsync()

