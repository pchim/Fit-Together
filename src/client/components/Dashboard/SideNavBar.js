import React, { Component } from 'react';
import { Link } from 'react-router';

const SideNavBar = () => (
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <p className="sidebar-brand">ACCOUNT</p>
      <ul className="sidebar-part">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/dashboard">My Dashboard</Link></li>
      </ul>
      <p className="sidebar-brand">ACTIONS</p>
      <ul className="sidebar-part">
        <li><Link to="/dashboard/log">Log</Link></li>
        <li><Link to="/dashboard/stats">Stats</Link></li>
        <li><Link to="/dashboard/goals">Goals</Link></li>
        <li><Link to="/dashboard/challenges">Challenges</Link></li>
        <li><Link to="/dashboard/teams">Teams</Link></li>
        <li><Link to="/dashboard/tips">Tips</Link></li>
        <li><Link to="/dashboard/geomap">Map</Link></li>
      </ul>
    </ul>
  </div>
);

export default SideNavBar;
