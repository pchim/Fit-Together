import React, { Component } from 'react';

const patient = {
  name: 'BroBot',
  age: 3,
  gender: 'Neutral',
  dob: '6/22/16',
  address: '944 Market St, San Francisco, CA 94102',
  team: [],
  image: 'http://icons.iconarchive.com/icons/martin-berube/character/256/Robot-icon.png'
};

const PatientInfo = () => (
  <div className="card medium">
    <div className="card-image">
      <img src={patient.image} id="patient-image" alt="test" className="activator img-circle" />
    </div>
    <div className="card-content">
      <span className="card-title activator">{patient.name}
        <i className="material-icons right">~</i>
      </span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{patient.name}
        <i className="material-icons right">x</i>
      </span>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>DOB: {patient.dob}</p>
      <p>Address: {patient.address}</p>
    </div>
    <div className="card-content">
      <span className="card-title activator">
        Welcome Back {patient.name}!
      </span>
    </div>    
  </div>
);

export default PatientInfo;
