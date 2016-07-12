import React, { PropTypes } from 'react';
import io from 'socket.io-client';

export default class Chat extends React.Component { 

  constructor(props) {
    super(props);
    this.connection = io.connect();
    this.connection.on('chat message', this.recieveMessage.bind(this));

    this.state = {
      messages: []
    };
  }

  recieveMessage(message) {
    let messages = this.state.messages;
    this.setState({
      messages: messages.concat(message)
    });
  }

  sendMessage(e) {
    if (this.refs.inputfield.value !== '') {
      this.connection.emit('chat message', { user: 'lynn', text: this.refs.inputfield.value });
      this.refs.inputfield.value = '';
    }
    e.preventDefault();     
  }

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="username"><strong>Lynn</strong></div>
          </div>
          {this.state.messages.map((message) => {
            return (
              <div className="message col-md-6">
                <div><strong>{message.user}: </strong>
                  <span>{message.text} </span>
                </div>
              </div>
            );
          })}
          <div>
            <form onSubmit={(e) => {this.sendMessage(e)}}>
              <input ref="inputfield" />
              <button type="submit" onClick={(e) => {this.sendMessage(e)}}></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  user: PropTypes.object
};
