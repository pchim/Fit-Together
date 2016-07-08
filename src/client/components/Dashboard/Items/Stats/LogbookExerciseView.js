import React, { Component, PropTypes } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookExerciseView extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE log exercise', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      type: this.refs.type.value,
      duration: this.refs.duration.value,
      distance: this.refs.distance.value,
      reps: this.refs.reps.value,
      sets: this.refs.sets.value,
      date_performed: today,
      user_id: 1
    };
    this.props.addExercise(formData);
    this.refs.type.value = '';
    this.refs.duration.value = '';
    this.refs.distance.value = '';
    this.refs.reps.value = '';
    this.refs.sets.value = '';
    console.log('added data');
  }

  render() {
    return (
      <div className="log-activity exercise-log">
        <div>
          <p className="log-title">{LogData[1].name}</p>
        </div>
        <ul>
          <p>Date: {today}</p>
          {LogData[1].chart.map(heading => <li><input ref={heading} type="text" placeholder={heading} /></li>)}
        </ul>
        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button>
      </div>
    );
  }
}

LogbookExerciseView.propTypes = {
  addExercise: PropTypes.func
};

export default LogbookExerciseView;
