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

class ExerciseChart extends Component {
  constructor(props) {
    super(props);
    const exerciseData = [];
    const mostRecent = [];
  }

  componentWillReceiveProps(nextProps) {
    this.exerciseData = nextProps.activities.data;
    this.mostRecent = nextProps.activities.data[1].slice(-1)[0].duration;
  }

  render() {  
    if (this.exerciseData) { 
      this.exerciseData = this.exerciseData[1].slice(-7).map(s => parseInt(s.duration, 10));
      this.mostRecent = this.mostRecent;
    }  
    const series = [{
      data: this.exerciseData
    }];

    return (
      <div className="exercise-chart-container">
        <div className="chart-title">Daily Exercise Duration</div>
        <Chart 
          className="exercise-chart"
          width={200} height={150} 
          series={series} minY={0}
        >
        <Layer width='80%' height='90%' position='top center'>
          <Ticks
            axis='y'
            lineLength='100%'
            lineVisible={true}
            lineStyle={{stroke:'lightgray'}}
            labelStyle={{textAnchor:'end',dominantBaseline:'middle',fill:'lightgray'}}
            labelAttributes={{x: -5}}
          />

            <Lines />
          </Layer>
        </Chart>
        <div className="chart-result">Last Entry: {this.mostRecent} mins</div>
      </div>
    );
  }
}

export default ExerciseChart;
