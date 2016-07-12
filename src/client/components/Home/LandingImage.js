import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const images = {
  team: 'https://www.rmiguides.com/blog/images/uploads/Archived/ElbrusS_Archived/CGrom-ELB13_7-19-13_team_on_acclimatization_hike_near_Cheget.JPG',
  trivia: 'http://img.mindbodygreen.com/image/upload/c_limit,w_738,f_auto/ftr/MuesliBerries-850x567.jpg',
  stat: 'https://www.inspire.nl/app/uploads/2013/07/svg-line-graph.png',
  tips: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEJHuXBYKpdBBtCnrKqaKsT3yZbhmfUeQPRVGJlOf50CeUZU3iPA',
  map: 'https://www.google.com/maps/d/thumbnail?mid=1TT-ipSapjGpDfHf_1kQFxI9c0YY&hl=en',
  tegan: 'https://avatars0.githubusercontent.com/u/16481164?v=3&s=400',
  aj: 'https://avatars0.githubusercontent.com/u/12506734?v=3&s=400',
  peter: 'https://avatars3.githubusercontent.com/u/16533019?v=3&s=400',
  lynn: 'https://avatars0.githubusercontent.com/u/15623227?v=3&s=400' 
};

const LandingImage = () => (
  <div>
    <div className="home-image" id="home">
      <div className="content">
        <h1>Fit Together</h1>
        <h3>Breathe Deep, Be Active, Stay Connected</h3>
        <button className="big-button" onClick={() => browserHistory.push('/dashboard')}>Demo
        </button>
      </div>
    </div>
    <div className="about" id="about">
      <div className="content">
        <h1>Are you Ready To Get Fit Together?</h1>
      </div>
      <div className="row">
        <div className="about-info col-md-4">
          <div>
            <img className="icon" src={images.stat} alt="Stats Icon" />
          </div>
          <div>
            <h3>Log & View your health statistics</h3>
          </div>
        </div>
        <div className="about-info col-md-4">
          <div>
            <img className="icon" src={images.team} alt="Teams Icon" />
          </div>
          <div>
            <h3>Interact with teams in your area</h3>
          </div>
        </div>
        <div className="about-info col-md-4">
          <div>
            <img className="icon" src={images.trivia} alt="Health Icon" />
          </div>
          <div>
            <h3>Gain knowledge on health topics</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="section" id="tools">
      <div className="content">
        <h1>Community and Motivation</h1>
      </div>
      <div className="row">
        <div className="section-info col-md-6">
          <div>
            <img className="icon" src={images.tips} alt="Something Icon" />
          </div>
          <div>
            <h3>Get Daily health & fitness tips</h3>
          </div>
        </div>
        <div className="section-info col-md-6">
          <div>
            <img className="icon" src={images.map} alt="Something Icon" />
          </div>
          <div>
            <h3>Find fitness groups near you</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="footer" id="team">
      <div className="content">
        <h1>Let's Get Fit Together</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>For those who love to breathe deep, get active, and stay connected, we offer you the experience that is sure to please: Fit Together. Fit Together integrates with your FitBit, your Move devices, or your phone to log real-time responses from your daily fitness regimen. We analyze that data to present personalized suggestions and statistics to help you stay on track with your goals. We also make fitness fun by inviting you to compete with friends, families, and anyone in the world with challenges and character leveling. Are you ready to Fit Together?</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer-info col-md-3">
          <div>
            <a href="https://github.com/teganduong"><img className="icon" src={images.tegan} alt="Something Icon" /></a>
          </div>
        </div>
        <div className="footer-info col-md-3">
          <div>
            <a href="https://github.com/ajgrande924"><img className="icon" src={images.aj} alt="Something Icon" /></a>
          </div>
        </div>
        <div className="footer-info col-md-3">
          <div>
            <a href="https://github.com/pchim"><img className="icon" src={images.peter} alt="Health Icon" /></a>
          </div>
        </div>
        <div className="footer-info col-md-3">
          <div>
            <a href="https://github.com/lcbits"><img className="icon" src={images.lynn} alt="Health Icon" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingImage;

