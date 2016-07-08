import React, { Component, PropTypes } from 'react';

class Tips extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE TIPS', props);
    this.tips = [1, 2, 3, 4, 5, 6, 7];
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are tips', nextProps);
    this.tips = nextProps.tips.data;
  }

  render() {
    console.log('TIPS INSIDE RENDER', this.tips);
    const random = Math.floor((Math.random() * 6) + 1);
    console.log('this is the random tip', random);
    const tipOftheDay = this.tips[random];
    console.log('tip of the day', tipOftheDay);  

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
