import React, { Component } from 'react';

const LogbookCard = ({ card }) => (
  <div className="log-activity card debug">
    <div className="image debug">
      {card.image}
    </div>
    <div className="content">
      {card.name}
    </div>
  </div>
);

LogbookCard.propTypes = {
  card: React.PropTypes.object.isRequired,
};

export default LogbookCard;

