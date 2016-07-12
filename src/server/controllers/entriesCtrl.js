const db = require('../db/connection.js');

exports.addEntry = (req, res) => {
  db.none('insert into entries(question, options)' +
  'values(${question}, ${options})',
    req.body)
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Inserted entry into db',
          data: req.body
        });
    })
    .catch((err) => {
      console.error('error in adding user: ', err);
    });
};

exports.getEntries = (req, res) => {
  db.many('select * from entries')
    .then(entries => {
      res.status(200)
        .json({
          status: 'success',
          data: entries,
          message: 'Retrieved all entries!'
        });
    })
    .catch((err) => {
      console.error('error in retrieving entries: ', err);
    });
};
