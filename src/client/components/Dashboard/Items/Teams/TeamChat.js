import React, { Component, PropTypes } from 'react';
import TeamMemberList from './TeamMemberList';
import TeamChatMessage from './TeamChatMessage';
import io from 'socket.io-client';
import $ from 'jquery';

const exampleUser = {
  name: 'Jessica Jones',
  user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
};

class TeamChat extends Component {
	constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user_id: 1, 
      team_id: 1,
      message: $('#message-to-send').val(),
      description: new Date()
    };
    this.props.sendMessage(formData); 
    $('#message-to-send').val('');
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
              <div className="chat-num-messages">already have 902 messages</div>
            </div>
          </div>
          <div className="chat-history messagebody">
            <ul>
              <li className="clearfix">
                <div className="message-data align-right">
                  <span className="message-data-time" >10:10 AM, Today</span> 
                  <span className="message-data-name" >Olia</span>
                  <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                  Hi Vincent, how are you? How is the project coming along?
                </div>
              </li>
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
