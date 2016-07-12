import React, { Component, PropTypes } from 'react';
import SleepChart from './SleepChart.js';
import FoodChart from './FoodChart.js';
import MemChart from './MemChart.js';
import ExerciseChart from './ExerciseChart.js';

class ChartData extends Component {
  constructor(props) {
    super(props);
    this.props.getActivities();
    this.activities = [];
  }

  componentWillReceiveProps(nextProps) {
    this.activities = nextProps.activities;
  }
  render() {

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
          <div className="chart-item col-sm-6"> 
            Calorie Intake
            <FoodChart activities={this.props.activities} />
          </div>
            <div className="chart-item col-sm-6">
              Sleep Quality and Duration
              <SleepChart activities={this.props.activities} />
            </div>
            <div className="chart-item col-sm-6">
              Mood, Energy, and Motivation
              <MemChart activities={this.props.activities} />
            </div>
            <div className="chart-item col-sm-6">
              Exercise Duration
              <ExerciseChart activities={this.props.activities} />
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}


export default ChartData;
