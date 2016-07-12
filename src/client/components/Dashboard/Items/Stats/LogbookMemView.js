import React, { Component, PropTypes } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookMemView extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user_id: 1,
      date_performed: today,
      mood: this.refs.mood.value,
      energy: this.refs.energy.value,
      motivation: this.refs.motivation.value,
    };
    this.props.addMem(formData);
    this.refs.mood.value = '';
    this.refs.energy.value = '';
    this.refs.motivation.value = '';
  }

  render() {
    return (
      <div className="log-activity mem-log">
        <div>
          <p className="log-title">Mem</p>
        </div> 
        <ul>
          <p>Date: {today}</p>
          {LogData[3].chart.map(heading => <li><input ref={heading} type="text" placeholder={heading} /></li>)}
        </ul>
        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button>
      </div>
    );
  }
}

LogbookMemView.propTypes = {
  addMem: PropTypes.func
};

export default LogbookMemView;
