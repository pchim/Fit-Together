import React, { Component } from 'react';
import LogbookCard from './LogbookCard';
const dummyCards = [
  { name: 'Foods',
    image: 'My Image' },
  { name: 'Exercise',
    image: 'My Image' },
  { name: 'Sleep',
    image: 'My Image' },
  { name: 'Measurements',
    image: 'My Image' },
  { name: 'Caffeine',
    image: 'My Image' },
  { name: 'Daily Mood',
    image: 'My Image' },        
];

const Logbook = () => (
  <div className="main-container">
    <div className="top-container">
      <div className="horizontal-dash debug">
        <p className="log-activity">Log Activity</p>
      </div>
      <div className="horizontal-dash debug">
        {dummyCards.map((card, index) => <LogbookCard card={card} key={index} />)}
      </div>
    </div>
  </div>
);

export default Logbook;
