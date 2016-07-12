import React, { Component, PropTypes } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookFoodView extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user_id: 1,
      date_performed: today,
      protein: this.refs.protein.value,
      fats: this.refs.fats.value,
      carbs: this.refs.carbs.value,
      calories: this.refs.calories.value,
    };
    this.props.addFood(formData);
    this.refs.protein.value = '';
    this.refs.fats.value = '';
    this.refs.carbs.value = '';
    this.refs.calories.value = '';
  }

  render() {
    return (
      <div className="log-activity food-log">
        <div>
          <p className="log-title">{LogData[0].name}</p>
        </div>
        <ul>
          <p>Date: {today}</p>
          {LogData[0].chart.map(heading => <li><input ref={heading} type="text" placeholder={heading} /></li>)}
        </ul>
        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button>
      </div>
    );
  }
}

LogbookFoodView.propTypes = {
  addFood: PropTypes.func
};

export default LogbookFoodView;
