import React, { PropTypes } from 'react';

const DisplayMsg = ({ message, score }) => (
  <div className="card-deck-wrapper col-sm-8">
    <div className="card-deck">
      <div className="card entry-card">
        <div className="entry-block">
          <h4 className="card-title">
            {message} {score} pts
          </h4>
          <img 
            src="http://xodia.pythonanywhere.com/static/xodia/images/winner.png" 
            alt=""
            className="star-img"
          />
        </div>
      </div>
    </div>
  </div>
);

DisplayMsg.propTypes = {
  message: PropTypes.string,
  score: PropTypes.number
};

export default DisplayMsg;
