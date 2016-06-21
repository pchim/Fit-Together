const { assert, expect } = require('chai');

// set up testing database
process.env.NODE_ENV = 'testing';
const db = require('../src/server/db/connection.js');

/* global describe, it, expect, before, after */
/* eslint-disable func-names, prefer-arrow-callback */
describe('Doctors Methods', function () {
  before(function (done) {
    // test data
    const doc = {
      name: 'Doe, John',
      dob: '1956-03-12',
      office: '1450 Montgomery St, San Francisco, CA 94105',
      phone: '6087771234',
      sex: 'M'
    }; 
    const doc2 = {
      name: 'Williams, Bob',
      dob: '1966-05-10',
      office: '50 Powell St, San Francisco, CA 94104',
      phone: '6086653786',
      sex: 'M'
    };  
    // clear out the database of doctors, restart sequence id and insert a doc
    db.none('delete from doctors')
      .then(() => {
        db.none('ALTER SEQUENCE doctors_id_seq RESTART WITH 1')
          .then(() => {
            db.none('insert into doctors(name, dob, office, phone, sex)' +
              'values(${name}, ${dob}, ${office}, ${phone}, ${sex})',
              doc)
            .then(() => {
              db.none('insert into doctors(name, dob, office, phone, sex)' +
                'values(${name}, ${dob}, ${office}, ${phone}, ${sex})',
                doc2)
              .then(() => {
                done();        
              });
            });
          });
      });
  });

  it('should retrieve a doctor from the database', function () {
    db.any('select * from doctors where name=${name}', { name: 'Doe, John' }).then(data => {
      expect(data.length).to.not.equal(0);
      expect(data[0].name).to.not.equal(null);
      expect(data[0].name).to.equal('Doe, John');
    });
  });

  it('should retrieve all doctors from the database', function () {
    db.any('select * from doctors').then(data => {
      expect(data.length).to.equal(2);
      expect(data[1].name).to.equal('Williams, Bob');
    });
  });
});
