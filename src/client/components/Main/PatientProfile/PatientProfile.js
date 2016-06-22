import React, { Component } from 'react';
import PatientInfo from './PatientInfo';
import PatientRightInfo from './PatientRightInfo';
import PatientDetailedInfo from './PatientDetailedInfo';
import BmiChart from './BmiChart';
import BpChart from './BpChart';
import WtChart from './WtChart';
import GlucoseChart from './GlucoseChart';
import Stats from '../Stats/Stats';

const PatientProfile = () => (
  <div className="main-container">
    <div className="top-container">
      <div className="row">
      <div className="col s6 m6">
        <PatientInfo />
      </div>
      <div className="col s6 m6">  
        <PatientDetailedInfo />
      </div>
      </div>
      <div className="row">
        <Stats />
      </div>
      
    </div>
  </div>
);

export default PatientProfile;
