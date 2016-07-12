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

class SleepChart extends Component {
  constructor(props) {
    super(props);
    const sleepData = [];
    const mostRecentDuration = [];
    const mostRecentQuality = [];

  }

  componentWillReceiveProps(nextProps) {
    this.sleepData = nextProps.activities.data;
    this.mostRecentQuality = nextProps.activities.data[0].slice(-1)[0].quality;
    this.mostRecentDuration = nextProps.activities.data[0].slice(-1)[0].duration;
  }

  render() {
    if (this.sleepData) { 
      this.durationData = this.sleepData[0].slice(-7).map(s => parseInt(s.duration, 10));
      this.qualityData = this.sleepData[0].slice(-7).map(s => parseInt(s.quality, 10));
    }  
    const series = [{
      data: this.durationData
    }, {
      data: this.qualityData
    }];

    return (
      <div className="sleep-chart-container">
        <div className="chart-title">Daily Sleep Quality and Duration</div>
        <Chart
          className="sleep-chart" 
          width={500} height={150} series={series} minY={0}
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
          <Transform method="stack">
            <Lines asAreas={true} />
            <Dots />
          </Transform>
        </Layer>
        </Chart>
        <div className="chart-result">Last Entry: Duration: {this.mostRecentDuration} Quality: {this.mostRecentQuality}</div>
      </div>

    );
  }
}

export default SleepChart;