import React, { Component } from 'react';
import { Link } from 'react-router';

const SideNavBar = () => (
  <div id="sidebar-wrapper">
    <ul className="side-nav fixed cyan lighten-2">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/dash">My Dashboard</Link></li>
      <li><Link to="/dash/log">Log Activities</Link></li>
      <li><Link to="/dash/stats">Stats</Link></li>
      <li><Link to="/dash/goals">Goals</Link></li>
      <li><Link to="/dash/challenges">Challenges</Link></li>
      <li><Link to="/dash/team">Manage Team</Link></li>
      <li><Link to="/dash/tip">Tip of the Day</Link></li>
    </ul>
  </div>
);

export default SideNavBar;
