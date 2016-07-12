import React, { Component, PropTypes } from 'react';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.sleep = [];
    this.activities = [];
    this.props.getActivities();
    this.props.fetchTips();
    this.tips = [];
    this.props.fetchUser('jjones');
  }


  componentWillReceiveProps(nextProps) {
    this.activities = nextProps.activities;
    this.tips = nextProps.tips;
  }

  render() {
    const { user } = this.props;
    const { activities } = this.activities; 

    return (
      <div>
        <SideNavBar />
          {this.props.children && React.cloneElement(this.props.children, {
            user: user,
            // sleep: this.sleep,
            activities: this.activities,
            tips: this.tips
          })}
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.object,
  activities: PropTypes.object,
  getSleep: PropTypes.func,
  sleep: PropTypes.array,
  getActivities: PropTypes.func,
  fetchTips: PropTypes.func,
  fetchLeaderboardRanks: PropTypes.func
};
