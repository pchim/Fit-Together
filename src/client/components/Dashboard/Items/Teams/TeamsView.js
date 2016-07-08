import React, { Component, PropTypes } from 'react';
import TeamsList from './TeamsList';
import CreateNewTeamModal from './CreateNewTeamModal';
import JoinTeamModal from './JoinTeamModal';
import Map from './Map';
import TeamChat from './TeamChat';

class TeamsView extends Component {
  constructor(props) {
    super(props);
    console.log('team props', props);
    this.props.fetchUserTeams({ user_id: 1 });
    this.props.fetchOtherTeams({ user_id: 1 });
    this.props.fetchMessages({ team_id: 1 });
    this.props.fetchTeamMembers({ team_id: 1, user_id: 1 });
    // this.props.sendMessage({ tem_id: 1, user_id: 1, message: 'hey hey hey', date_entered: new Date() });

    this.teams = [];
    this.otherteams = [];
    this.messages = [];
    this.members = [];
  }

  componentWillReceiveProps(nextProps) {
    this.teams = nextProps.teams;
    this.otherteams = nextProps.otherteams;
    this.messages = nextProps.messages;
    this.members = nextProps.members;
    // console.log('this.teams', this.teams);
    // console.log('this.otherteams', this.otherteams);
  }

  fetchTeamChat(teamId, userId) {
    this.props.fetchMessages({ team_id: teamId });
    this.props.fetchTeamMembers({ team_id: teamId, user_id: userId });
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <div className="col-md-8">
            <Map members={this.members} />
            <TeamChat members={this.members} messages={this.messages} sendMessage={this.props.sendMessage.bind(this)} />
          </div>
          <div className="col-md-4 team-bar">
            <div className="team-header-items team-header-button-container">
              <button 
                type="button" 
                className="btn btn-success" 
                data-toggle="modal" 
                data-target="#createNewTeamModal"
              >
                Create New Team
              </button>
            </div>
            <div className="team-header-items team-header-button-container">
              <button 
                type="button" 
                className="btn btn-default" 
                data-toggle="modal" 
                data-target="#joinTeamModal"
              >
                Join Team
              </button>
            </div>
            <div className="team-list"> 
              <TeamsList teams={this.teams} deleteTeam={this.props.deleteTeam.bind(this)} fetchTeamChat={this.fetchTeamChat.bind(this)} />
            </div>
          </div>
        </div>
        <div>
          <CreateNewTeamModal createTeam={this.props.createTeam.bind(this)} />
          <JoinTeamModal joinTeam={this.props.joinTeam.bind(this)} teams={this.otherteams} />
        </div>
      </div>
    );
  }
}

TeamsView.propTypes = {
  fetchUserTeams: PropTypes.func,
  fetchOtherTeams: PropTypes.func,
  fetchTeamMembers: PropTypes.func,
  createTeam: PropTypes.func,
  deleteTeam: PropTypes.func,
  joinTeam: PropTypes.func,
  fetchMessages: PropTypes.func,
  sendMessage: PropTypes.func,
  teams: PropTypes.array,
  otherTeams: PropTypes.array,
  messages: PropTypes.array,
  members: PropTypes.array
};

export default TeamsView;
