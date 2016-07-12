import React, { Component, PropTypes } from 'react';
import RecentFoodActivity from './RecentFoodActivity.js';
import RecentExerciseActivity from './RecentExerciseActivity.js';
import RecentSleepActivity from './RecentSleepActivity.js';
import RecentMemActivity from './RecentMemActivity.js';

class ProfileActivityBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="profile-activity-bar">
          <RecentFoodActivity activities={this.props} />
          <RecentExerciseActivity activities={this.props} />
          <RecentSleepActivity activities={this.props} />
          <RecentMemActivity activities={this.props} />
        </div>
      </div>
    ); 
  }
}

export default ProfileActivityBar;