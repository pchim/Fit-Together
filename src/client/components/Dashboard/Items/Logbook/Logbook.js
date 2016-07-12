import React, { Component, PropTypes } from 'react';


class Logbook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="main-log-container" >
        <div className="log-container top-container">
          <div className="horizontal-dash debug">
            <p>Log Activity</p>
          </div>
          <div className="horizontal-dash debug">
          </div>
          <div className="horizontal-dash debug">
          </div>      
        </div>
      </div>
    );
  }
}

Logbook.propTypes = {
  addMem: PropTypes.func,
  addExercise: PropTypes.func,
  addFood: PropTypes.func,
  addSleep: PropTypes.func
};

export default Logbook;