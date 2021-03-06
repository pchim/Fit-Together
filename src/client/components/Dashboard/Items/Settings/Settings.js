import React, { PropTypes } from 'react';
const user = {
  name: 'Jessica Jones',
  username: 'jjones',
  password: 'jjones',
  email: 'jjones@gmail.com',
  age: 26,
  weight: 145,
  height: 154.6,
  bmi: 21.3,
  goal: 'Live a healthy lifestyle',
  points: 0,
  user_icon: 'https://assets-cdn.github.com/images/modules/styleguide/linktocat.png'
};

const Settings = () => (
  <div>
    <div className="main-container">
      <div>
        <h3>Profile Information</h3>
        <button 
          type="button" 
          className="btn btn-primary"
          data-toggle="modal" 
          data-target="#editProfileModal"
        >
          Edit Profile
        </button>
      </div>
      <div className="user-info">
        <div><label>Name:</label> {user.name}</div>
        <div><label>Username:</label> {user.username}</div>
        <div><label>Email:</label> {user.email}</div>
        <div><label>Goal:</label> {user.goal}</div>
      </div>
    </div>
    <div 
      className="modal fade" 
      id="editProfileModal" 
      tabIndex="-1" 
      role="dialog" aria-labelledby="myModalLabel"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">Edit your profile</h4>
          </div>
          <div className="modal-body">
            <form>
              <label>Name</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.name} />
              </div>
              <label>Username</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.username} />
              </div>
              <label>Email</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.email} />
              </div>
              <label>Goal</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.goal} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close
            </button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
); 

Settings.propTypes = {
  user: PropTypes.object
}; 

export default Settings;