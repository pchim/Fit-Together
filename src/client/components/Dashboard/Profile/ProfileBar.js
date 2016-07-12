import React, { Component, PropTypes } from 'react';
 
const user = {
  user_icon: 'http://i988.photobucket.com/albums/af3/TheLightChasers/Portraits/portrait-sigma-50mm-f14-hsm-canon-eos-5d-mk2-face-Favimcom-473053_zpsd55e8d8e.jpg'
};

const heightIcon = 'http://www.clker.com/cliparts/L/D/O/L/0/7/male-restroom-symbol-white-on-transparent-hi.png';

class ProfileBar extends Component {
  constructor(props) {
    super(props);
    this.user = [];
  }

  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user.data;
  }

  render() {
    return (
      <div>
        <div className="profile-image-container">
          <img className="profile-image" src={user.user_icon} alt="test" />
          <div className="profile-text-box">
            <div className="profile-inner-text-box">
              <h5 className="profile-text-small">{this.user.name}</h5>
            </div>
          </div>
        </div>
        <div className="profile-bottom-bar">
          <div className="profile-stat-header">
            <p className="profile-stat-header-text"><strong>SUMMARY</strong></p>
          </div>  
          <div className="profile-stat-row">
            <div className="profile-stat-row-item first bottom">
              <p className="profile-stat-value">{this.user.age}</p>
              <p className="profile-stat-description">Age</p>
            </div>
            <div className="profile-stat-row-item bottom">
              <p className="profile-stat-value">{this.user.weight}</p>
              <p className="profile-stat-description">Weight</p>
            </div>
          </div>
          <div className="profile-stat-row height">
            <div className="profile-stat-row-item">
              <img className="height-image" src={heightIcon} alt="test" />
            </div>
            <div className="profile-stat-row-item">
              <p className="profile-stat-value">{((this.user.height)/30).toFixed(0)} ft</p>
              <p className="profile-stat-description">Height</p>
            </div>
          </div>
          <div className="profile-stat-row">
            <div className="profile-stat-row-item first top">
              <p className="profile-stat-value">{this.user.bmi}</p>
              <p className="profile-stat-description">BMI</p>
            </div>
            <div className="profile-stat-row-item top">
              <p className="profile-stat-value">11%</p>
              <p className="profile-stat-description">Fat</p>
            </div>
          </div>
          <div className="profile-stat-header">
            <p className="profile-stat-header-text-goal"><strong>GOAL</strong></p>
            <p className="profile-stat-description-goal">{this.user.goal}</p>
          </div> 
        </div>
      </div>
    ); 
  }
}

export default ProfileBar;
