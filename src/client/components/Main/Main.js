import React, { Component } from 'react';
import SideNavBar from './SideNavBar';
import PatientProfile from './PatientProfile/PatientProfile';

const Main = ({ children }) => (
  <div className="container">
    <SideNavBar />
    {children}
  </div>
);

export default Main;
