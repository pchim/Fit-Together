
import React, { Component, PropTypes } from 'react';
import TeamMemberList from './TeamMemberList';
import TeamChatMessage from './TeamChatMessage';
import io from 'socket.io-client';

const exampleUser = {
  name: 'Jessica Jones',
  user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
};

class TeamChat extends Component {
  constructor(props) {
    super(props);
    this.connection = io.connect();
    this.connection.on('chat message', this.recieveMessage.bind(this));

    this.state = {
      messages: []
    };
  }

  recieveMessage(message) {
    console.log(this.state);
    let messages = this.state.messages;
    this.setState({
      messages: messages.concat(message)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user_id: 1,
      user_name: 'Jessica Jones', 
      team_id: 1,
      team_name: 'Bay Area Hikers', 
      message: $('#message-to-send').val(),
      date_entered: new Date()
    };
    
    this.props.sendMessage(formData); 
    this.socket.emit('new message', formData);
  }


  render() {
    return (
      <div className="chat-container clearfix">
        <div className="chat">
          <div className="chat-header">
            <div>
              <img className="img-circle user-icon" src={exampleUser.user_icon} alt="avatar" />
            </div>
            <div className="chat-about">
              <div className="chat-with">Chat with Bay Area Hikers</div>
              <div className="chat-num-messages">already have {this.props.messages.length} messages</div>
            </div>
          </div>
          <div className="chat-history messagebody">
            <ul>
              {this.props.messages.map(message => <TeamChatMessage message={message} />)}
            </ul>
          </div>        
          <div className="chat-message clearfix">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <textarea refs="message" name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>
              <i className="fa fa-file-o"></i>
              <i className="fa fa-file-image-o"></i>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="people-list" id="people-list">
          <div className="search">
            <input type="text" placeholder="search" />
            <i className="fa fa-search"></i>
          </div>
          <TeamMemberList members={this.props.members} />
        </div>
      </div>
    );
  }
}

TeamChat.propTypes = {
  messages: PropTypes.array,
  members: PropTypes.array,
  sendMessage: PropTypes.func
};

export default TeamChat;