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

class FoodChart extends Component {
  constructor(props) {
    super(props);
    const foodData = [];
    const mostRecent = [];
  }

  componentWillReceiveProps(nextProps) {
    this.foodData = nextProps.activities.data;
    this.mostRecent = nextProps.activities.data[2].slice(-1)[0].calories;
  }

  render() {
    if (this.foodData) { 
      this.foodData = this.foodData[2].slice(-7).map(s => parseInt(s.calories, 10));
    }  
    const series = [{
      data: this.foodData
    }];

    return (
      <div className="food-chart-container">
        <div className="chart-title">Daily Caloric Intake</div>
        <Chart
          className="food-chart"
          width={200} height={100} series={series} minY={0}
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
            <Title position="top center" style={{ textAnchor: 'middle' }}>
              Calorie Intake
            </Title>
          </Layer>
        </Chart>
        <div className="chart-result">Last Entry: {this.mostRecent} cals</div>
      </div>
    );
  }
}

export default FoodChart;
