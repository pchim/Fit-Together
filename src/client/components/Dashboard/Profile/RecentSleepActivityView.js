import React, { Component } from 'react';

const RecentSleepActivityView = (props) => (
  <tr>
    <td>{props.date}</td>
    <td>{props.duration}</td>
    <td>{props.quality}</td>
  </tr>
);

export default RecentSleepActivityView;
