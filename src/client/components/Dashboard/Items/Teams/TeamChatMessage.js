import React, { Component, PropTypes } from 'react';

class TeamChatMessage extends Component {
  constructor(props) {
    super(props);
    console.log('message', this.props.message);
  }

  render() {
    return (
      <li>
        <div className="message-data message">
          <span className="message-data-name"><i className="fa fa-circle online"></i> {this.props.message.user_name}</span>
          <span className="message-data-time">{this.props.message.date_entered}</span>
        </div>
        <div className="message my-message">{this.props.message.message}</div>
      </li>
    );
  }
}

TeamChatMessage.propTypes = {
  message: PropTypes.obj
};

export default TeamChatMessage;
