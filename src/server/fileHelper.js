let apiKeyPath = `${__dirname}/config/api-keys.js`;

if (process.env.NODE_ENV === 'production') {
  apiKeyPath = '/data/config/api-keys.js';
}

module.exports = {
  apiKeyPath
};
