const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
require('dotenv').config();

const baseConnection = process.env.DATABASE_URL;
let connectionString = baseConnection;
const dbEnv = {
  development: () => { connectionString = baseConnection; },
  testing: () => { connectionString = `${baseConnection}test`; },
  production: () => { connectionString = 'tbd'; }
};
dbEnv[process.env.NODE_ENV]();

const db = pgp(connectionString);
module.exports = db;
