import React, { Component, PropTypes } from 'react';
import RecentExerciseActivityView from './RecentExerciseActivityView';

const icon = {
  exercise: 'http://allmedcorp.com/wp-content/uploads/2014/05/New-Diet-Exercise-Guideline-Heart-Health1.jpg'
};

class RecentExerciseActivity extends Component {
  constructor(props) {
    super(props);
    this.exerciseData = [1, 2, 3];
  }

  componentWillReceiveProps(nextProps) {
    this.exerciseData = nextProps.activities.activities.data[1];
  }

  render() {
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <img src={icon.exercise} className="activity-icon img-circle" alt="test" />
            <p className="profile-text-header">Recent Exercise</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody className="profile-text-body">
                  {this.exerciseData.slice(-3).map((e, index) => 
                    <RecentExerciseActivityView type={e.type} duration={e.duration} key={index} date={e.date_performed} />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentExerciseActivity;
