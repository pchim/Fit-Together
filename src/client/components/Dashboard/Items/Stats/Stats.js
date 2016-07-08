import React, { Component, PropTypes } from 'react';
import Chart from './Chart.js';
import sleepMemData from './dataSeedAlgo.js';
import D from './dataConstants.js';

import LogbookMemView from './LogbookMemView';
import LogbookExerciseView from './LogbookExerciseView';
import LogbookFoodView from './LogbookFoodView';
import LogbookSleepView from './LogbookSleepView';

class Stats extends Component {
  constructor(props) {
    super(props);
    console.log('component constructor stats ', this.props);
    this.activities = this.props.activities;
    console.log(this.props.activities);
    // data constants
    this.D = D;
    this.dataNum = 0;
    this.fieldNum = 0;
    this.state = {
      xdataNum: 0,
      xfieldNum: 0,
      ydataNum: 0,
      yfieldNum: 1,
      rSquareValue: 0,
    };
    this.updateRsquareView = this.updateRsquareView.bind(this);
  }

  componentWillMount() {
    // this.props.getSleep();
  }

  componentDidMount() {
    // this.props.getSleep();
  }

  componentWillReceiveProps(propsSoon) {
    // this.sleep = propsSoon;
  }

  updateRsquareView(rSquareValue) {
    this.setState({ rSquareValue });
  }

  xsetDataNum(xdataNum) {
    console.log('clicked!!!'); //
    this.setState({ xdataNum, xfieldNum: 0 });
  }

  xsetFieldNum(xfieldNum) {
    console.log('clicked!!!'); //
    this.setState({ xfieldNum });
  }

  ysetDataNum(ydataNum) {
    console.log('clicked!!!'); //
    this.setState({ ydataNum, yfieldNum: 0 });
  }

  ysetFieldNum(yfieldNum) {
    console.log('clicked!!!'); //
    this.setState({ yfieldNum });
  }

  render() {
    const chartType = 'bar';
    const dataType = 'sleep';
    return (
      <div>
        <div className="main-container">
          <div className="col-md-3">
            <LogbookFoodView addFood={this.props.addFood} />
          </div>
          <div className="col-md-3">
            <LogbookExerciseView addExercise={this.props.addExercise} />
          </div>
          <div className="col-md-3">
            <LogbookMemView addMem={this.props.addMem} />
          </div>
          <div className="col-md-3">
            <LogbookSleepView addSleep={this.props.addSleep} />
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="regression-chart-container">
                <div className="stat-chart-title">Daily Activity Regression</div>
                <Chart 
                  dataset={this.props.activities.data} 
                  chartType={chartType}
                  xyDataType={this.state}
                  dataTitle={dataType}
                  D={this.D}
                  size={{ height: '400', width: '400' }} 
                  id='regression-chart'
                  updateRsquareView={this.updateRsquareView}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="chart-control-container">
                <div className="stat-chart-title">Chart Control</div>
                <div className="stats-box-inner">
                  <h1>X-Axis: Category - {D[this.state.xdataNum].title}</h1>
                  <div>
                    {D.map((dayData, index) => 
                      <button 
                        className="stats-axis-type btn btn-primary" 
                        onClick={this.xsetDataNum.bind(this, index)}
                      >{dayData.title}</button>)
                      }
                  </div>
                  <h1>X-Axis: Field - {D[this.state.xdataNum].fields[this.state.xfieldNum]} </h1>
                  <div>
                    {D[this.state.xdataNum].fields.map((fields, index) => 
                      <button 
                        className="stats-axis-type btn btn-primary" 
                        onClick={this.xsetFieldNum.bind(this, index)}
                      >{fields}</button>)
                      }
                  </div>
                </div>
                <div className="stats-box-inner">
                  <h1>Y-Axis: Category - {D[this.state.ydataNum].title} </h1>
                  <div>
                    {D.map((dayData, index) => 
                      <button 
                        className="stats-axis-type btn btn-primary" 
                        onClick={this.ysetDataNum.bind(this, index)}
                      >{dayData.title}</button>)
                      }
                  </div>
                  <h1>Y-Axis: Field - {D[this.state.ydataNum].fields[this.state.yfieldNum]} </h1>
                  <div>
                    {D[this.state.ydataNum].fields.map((fields, index) => 
                      <button 
                        className="stats-axis-type btn btn-primary" 
                        onClick={this.ysetFieldNum.bind(this, index)}
                      >{fields}</button>)
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="daily-stat-container">
              <div className="stat-chart-title">30 Day Overview of Daily Entries</div>
              <Chart 
                dataset={this.props.activities.data} 
                chartType={chartType} 
                dataTitle={dataType}
                D={this.D} 
                size={{ height: '350', width: '900' }}
                id="daily-stat-chart" 
              />
            </div>
          </div>
        </div>
      </div>);
  }
}

Stats.propTypes = {
  getSleep: PropTypes.func,
  activities: PropTypes.object,
  addMem: PropTypes.func,
  addExercise: PropTypes.func,
  addFood: PropTypes.func,
  addSleep: PropTypes.func
};

export default Stats;
