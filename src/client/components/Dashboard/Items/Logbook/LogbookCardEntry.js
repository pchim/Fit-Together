import React, { Component } from 'react';

const dummyCardInfo = [
  'Name',
  'Calories (kCal)',
  'Protein (g)',
  'Fat (g)',
  'Carbs (g)',
  'Servings',
  'Tags'
];

const dummyInfo = {
  activity: 'Foods',
  date: '6/27/16',
  info: dummyCardInfo,
};

const LogbookCardEntry = ({ cardInfo }) => (
  <div className="log-activity">
    <p>Logging {dummyInfo.activity}</p>
    <p>Date: {dummyInfo.date}</p>
    <table>
      <tr>{dummyCardInfo.map(heading => <th>{heading}</th>)}</tr>
      <tr>{dummyCardInfo.map(heading => <td><input type="text" /></td>)}
        <td><button>ADD</button></td></tr>
    </table>
  </div>
);

LogbookCardEntry.propTypes = {
  cardInfo: React.PropTypes.object.isRequired,
};

export default LogbookCardEntry;

