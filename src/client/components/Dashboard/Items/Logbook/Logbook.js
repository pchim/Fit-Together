import React, { Component } from 'react';
import LogbookCard from './LogbookCard';
import LogbookCardEntry from './LogbookCardEntry';
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
    <div className="log-container top-container">
      <div className="horizontal-dash debug">
        <p>Log Activity</p>
      </div>
      <div className="horizontal-dash debug">
        {dummyCards.map((card, index) => <LogbookCard card={card} key={index} />)}
      </div>
      <div className="horizontal-dash debug">
        <LogbookCardEntry />
      </div>      
    </div>
  </div>
);

export default Logbook;
