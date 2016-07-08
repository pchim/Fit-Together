const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/fidgetywidget';
// const fileHelper = require(__dirname + '/../fileHelper.js');
// const connectionString = require(fileHelper.apiKeyPath).Aws.rds.key;
const db = pgp(connectionString);

module.exports = db;
