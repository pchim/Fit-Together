import React, { Component, PropTypes } from 'react';

class Tips extends Component {
  constructor(props) {
    super(props);
    this.tips = [1, 2, 3, 4, 5, 6, 7];
  }

  componentWillReceiveProps(nextProps) {
    this.tips = nextProps.tips.data;
  }

  render() {
    const random = Math.floor((Math.random() * 6) + 1);
    const tipOftheDay = this.tips[random];

    return (
      <div className="tips-container"> 
        <div className="tips-image">
          <img className="img-thumbnail tip-icon" src={tipOftheDay.image} alt="avatar" />
        </div>
        <div className="tips-description">
          <p className="chart-title-tips">Tip Of The Day</p>
          <div>{tipOftheDay.tip}</div>
        </div>
      </div>
    );
  }
}

export default Tips;
