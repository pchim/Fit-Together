import React, { Component } from 'react';

const RecentExerciseActivityView = (props) => (
  <tr>
    <td>{props.date}</td>
    <td>{props.type}</td>
    <td>{props.duration}</td>
  </tr>
);

export default RecentExerciseActivityView;