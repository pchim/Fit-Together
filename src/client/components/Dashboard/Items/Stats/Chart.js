import React, { Component } from 'react';
import d3Chart from './d3Chart';
import sleepMemData from './dataSeedAlgo.js';
let sleepData; 
let memData;
[sleepData, memData] = sleepMemData();
let dataset1 = sleepData.slice(0, 10).concat(sleepData.slice(20));

class Chart extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
    this.dataset = this.props.dataset;
    this.subdata = this.dataset;
    this.D = this.props.D;
    this.height = this.props.size.height;
    this.width = this.props.size.width;
    this.id = this.props.id;
    const xyDataType = this.props.xydataType;
    // make this into a state
    this.state = {
      xyDataType
    };
    console.log('props passed down', this.props.xyDataType);
    this.xyDataType = this.props.xyDataType;
    this.updateRsquareView = this.props.updateRsquareView;
  }

  componentWillMount() {
    this.preProcessData();
  }

  componentDidMount() {
    this.initChart();
  }

  componentWillReceiveProps(newProps) {
    if (this.svg.updateScatterXy) {
      this.svg.updateScatterXy(newProps.xyDataType);
    }
  }

  preProcessData(data, type) {

  }

  initChart() {
    const maxWidth = this.width;
    const maxHeight = this.height;
    const D = this.D;
    const svg = new d3Chart(`#${this.id}`, { width: maxWidth, height: maxHeight, D: this.D, updateRsquareView: this.updateRsquareView }, this.subdata, this.xyDataType);
    this.svg = svg;
    if (!this.xyDataType) {
      svg.makeBars();
      this.svg.makeTitleButtons(D);
      this.svg.makeAxis();
      this.svg.makeYAxis();
    } else {
      this.svg.makeScatterXy(this.xyDataType);
      this.svg.updateScatterXy(this.xyDataType);
    }
    console.log(svg);
    // this.svg.makeScatter();
  }

  render() {
    return (
      <div className="chart" id={this.id}></div>
    );
  }
}

Chart.propTypes = {
  data: React.PropTypes.array,
  domain: React.PropTypes.object
};

export default Chart;

