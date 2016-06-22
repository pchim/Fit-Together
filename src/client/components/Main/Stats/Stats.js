import React, { Component } from 'react';
import PatientInfo from '../PatientProfile/PatientInfo';
import PatientRightInfo from '../PatientProfile/PatientRightInfo';
import PatientDetailedInfo from '../PatientProfile/PatientDetailedInfo';
import BmiChart from '../PatientProfile/BmiChart';
import BpChart from '../PatientProfile/BpChart';
import WtChart from '../PatientProfile/WtChart';
import GlucoseChart from '../PatientProfile/GlucoseChart';

const Stats = () => (
  <div className="row">
    <div className="col s12 m12">
      <BmiChart />
    </div>
    <div className="col s12 m12">  
      <BpChart />
    </div>
    <div className="col s12 m12">  
      <WtChart />
    </div>
    <div className="col s12 m12">    
      <GlucoseChart />
    </div>
  </div>
);

export default Stats;
