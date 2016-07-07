import React, { Component } from 'react';

const RecentFoodActivityView = (props) => (
  <tr>
    <td>{props.date}</td>
    <td>{props.carbs}</td>
    <td>{props.fats}</td>
    <td>{props.protein}</td>
  </tr>
);

export default RecentFoodActivityView;
