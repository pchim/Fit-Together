import React, { Component, PropTypes } from 'react';

const {
  // main component
  Chart, 
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient, helpers
} = require('rumble-charts');

class MemChart extends Component {
  constructor(props) {
    super(props);
    const moodData = [];
    const motivationData = [];
    const energyData = [];
    const mostRecentMood = [];
    const mostRecentEnergy = [];
    const mostRecentMotivation = [];
  }

  componentWillReceiveProps(nextProps) {
    console.log('this is inside mem chart!!', nextProps);
    this.moodData = nextProps.activities.data[3].slice(-7).map(s => parseInt(s.mood));
    this.energyData = nextProps.activities.data[3].slice(-7).map(s => parseInt(s.energy));
    this.motivationData = nextProps.activities.data[3].slice(-7).map(s => parseInt(s.motivation));
    this.mostRecentMood = nextProps.activities.data[3].slice(-1)[0].mood;
    this.mostRecentEnergy = nextProps.activities.data[3].slice(-1)[0].energy;
    this.mostRecentMotivation = nextProps.activities.data[3].slice(-1)[0].motivation;
  }


  render() {
    const series = [{
      data: this.moodData
    }, {
      data: this.energyData
    }, {
      data: this.motivationData
    }];

    return (
      <div className="mem-chart-container">
        <div className="chart-title">Mood, Energy, Motivation</div>
        <Chart
          className="mem-chart" 
          width={500} height={150} series={series} minY={0}

        >
          <Lines />
          <Dots />
        </Chart>
        <div className="chart-result">Last Entry: Mood: {this.mostRecentMood} Energy: {this.mostRecentEnergy} Motivation: {this.mostRecentMotivation} </div>
      </div>

    );
  }
}

export default MemChart;
