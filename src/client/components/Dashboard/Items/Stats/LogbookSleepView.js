import React, { Component, PropTypes } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookSleepView extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE sleep', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user_id: 1,
      duration: this.refs.duration.value,
      quality: this.refs.quality.value,
      date_performed: today,
    };
    this.props.addSleep(formData);
    this.refs.duration.value = '';
    this.refs.quality.value = '';
    console.log('added data');
  }

  render() {
    return (
      <div className="log-activity sleep-log">
        <div> 
          <p className="log-title">{LogData[2].name}</p>
        </div>
        <ul>
          <p>Date: {today}</p>
          {LogData[2].chart.map(heading => <li><input ref={heading} type="text" placeholder={heading} /></li>)}
        </ul>
        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button>
      </div>
    );
  }
}

LogbookSleepView.propTypes = {
  addSleep: PropTypes.func
};

export default LogbookSleepView;
