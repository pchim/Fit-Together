import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const images = {
  team: 'https://www.rmiguides.com/blog/images/uploads/Archived/ElbrusS_Archived/CGrom-ELB13_7-19-13_team_on_acclimatization_hike_near_Cheget.JPG',
  trivia: 'http://img.mindbodygreen.com/image/upload/c_limit,w_738,f_auto/ftr/MuesliBerries-850x567.jpg',
  stat: 'https://www.inspire.nl/app/uploads/2013/07/svg-line-graph.png'
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
    <div className="section" id="section1">
      <div className="content">
        <h1>Community and Motivation</h1>
      </div>
      <div className="row">
        <div className="section-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Daily health & fitness tips</h3>
          </div>
        </div>
        <div className="section-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
        <div className="section-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="footer" id="section2">
      <div className="content">
        <h1>Something Else Interesting</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat arcu quam, vitae porta erat mollis et. Pellentesque vitae libero lacinia, tempus ante sit amet, tristique ante. Vivamus a gravida arcu, in ullamcorper lacus. Donec non ante malesuada, elementum diam eu, bibendum felis. Nam lacinia elit orci, et semper diam condimentum ut. Duis arcu dolor, pharetra vel dignissim eu, aliquam ut arcu. Fusce eget auctor purus. Sed sit amet cursus dui.</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
        <div className="footer-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
        <div className="footer-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Health Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingImage;

