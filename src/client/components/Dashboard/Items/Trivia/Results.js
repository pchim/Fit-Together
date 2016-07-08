import React, { PropTypes } from 'react';

const Results = ({ score, questionStatus }) => (
  <div className="results">
    <div className="current-score">Current Score: {score}</div>
    <div className="questionStatus">{questionStatus}</div>
  </div>
);

Results.propTypes = {
  score: PropTypes.number,
  questionStatus: PropTypes.string
};

export default Results;
