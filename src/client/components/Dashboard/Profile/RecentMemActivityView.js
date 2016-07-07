import React, { Component } from 'react';

const RecentMemActivityView = (props) => (
  <tr>
    <td>{props.date}</td>
    <td>{props.mood}</td>
    <td>{props.energy}</td>
    <td>{props.motivation}</td>
  </tr>
);

export default RecentMemActivityView;
