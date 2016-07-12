import * as c from '../constants/constants';
import fetch from 'isomorphic-fetch';

export const error = err => ({ type: c.REQUEST_ERROR, data: err });
export const receiveUser = user => ({ type: c.RECEIVE_USER, data: user });
export const receiveTeamMembers = members => ({ type: c.RECEIVE_MEMBERS, data: members });
export const addToTeams = team => ({ type: c.CREATE_TEAM, data: team });
export const receiveUserTeams = teams => ({ type: c.RECEIVE_TEAMS, data: teams });
export const removeFromTeams = team => ({ type: c.REMOVE_TEAM, data: team });
export const receiveOtherTeams = otherteams => ({ type: c.RECEIVE_OTHER_TEAMS, data: otherteams });
export const removeOtherTeam = team => ({ type: c.REMOVE_OTHER_TEAM, data: team });
export const joinUserTeam = team => ({ type: c.JOIN_TEAM, data: team });
export const addOtherTeam = team => ({ type: c.ADD_OTHER_TEAM, data: team });
export const receiveExercise = exercise => ({ type: c.RECEIVE_EXERCISE, data: exercise });
export const receiveSleep = sleep => ({ type: c.RECEIVE_SLEEP, data: sleep });
export const receiveActivities = activities => ({ type: c.RECEIVE_ACTIVITIES, data: activities });
export const receiveTips = tips => ({ type: c.RECEIVE_TIP, data: tips });
export const receiveMessages = messages => ({ type: c.RECEIVE_MESSAGES, data: messages });
export const addMessage = message => ({ type: c.ADD_MESSAGE, data: message });

export const addUser = (obj) => {
  const payload = JSON.stringify(obj);
  return dispatch => (
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(user => dispatch(receiveUser(user)))
    .catch(err => dispatch(error(err)))
  );
};

export const getUser = () => (
  dispatch => (
    fetch('/api/user', {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(userInfo => {
      return dispatch(receiveUser(userInfo[0]));
    })
    .catch(err => dispatch(error(err)))
  )
);

export const updateUserPoints = (points) => (
  dispatch => (
    fetch('/api/user/points', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({ points })
    })
    .then(res => res.json())
    .then(userInfo => dispatch(receiveUser(userInfo)))
    .catch(err => dispatch(error(err)))
  )
);

export const fetchUser = (username) => (

  dispatch => (
    fetch(`/api/users/${username}`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(userInfo => dispatch(receiveUser(userInfo)))
    .catch(err => dispatch(error(err)))
  )
);

export const fetchUserTeams = (obj) => (
  dispatch => (
    fetch('/api/userteams', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
      dispatch(receiveUserTeams(response.data));
    })
    .catch(err => dispatch(error(err)))
  )
);

export const fetchOtherTeams = (obj) => (
  dispatch => (
    fetch('/api/otherteams', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
      dispatch(receiveOtherTeams(response.data));
    })
    .catch(err => dispatch(error(err)))
  )
);

export const fetchTeamMembers = (obj) => (
  dispatch => (
    fetch('/api/teammembers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
      dispatch(receiveTeamMembers(response.data));
    })
    .catch(err => dispatch(error(err)))
  )
);


export const createTeam = (obj) => {
  const payload = JSON.stringify(obj);

  return dispatch => (
    fetch('/api/createteam', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(response => dispatch(addToTeams(response.data)))
    .catch(err => dispatch(error(err)))
  );
};

export const deleteTeam = (obj) => {
  const payload = JSON.stringify(obj);

  return dispatch => (
    fetch('/api/leaveteam', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(response => {
      dispatch(removeFromTeams(response.data));
      dispatch(addOtherTeam(response.data));
    })
    .catch(err => dispatch(error(err)))
  );
};

export const joinTeam = (obj) => {
  const payload = JSON.stringify(obj);

  return dispatch => (
    fetch('/api/jointeam', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(response => {
      dispatch(joinUserTeam(response.data));
      dispatch(removeOtherTeam(response.data));
    })
    .catch(err => dispatch(error(err)))
  );
};

export const getSleep = () => {
  return dispatch => {
    fetch('/api/usersleep', {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(sleep => (  
      dispatch(receiveSleep(sleep.data))
    ))
    .catch(err => dispatch(error(err)));
  };
};

export const getActivities = () => (
  dispatch => {
    fetch('/api/useractivities', {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(activities => (
      dispatch(receiveActivities(activities))
    ))
    .catch(err => dispatch(error(err)));
  }
);


export const addMem = (obj) => {
  const payload = JSON.stringify(obj);
  return dispatch => (
    fetch('/api/addMem', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .catch(err => dispatch(error(err)))
  );
};

export const receiveQuizQuestions = questions => ({ type: c.RECEIVE_QUESTIONS, data: questions });
export const receiveCurrentQuestion = question => ({ 
  type: c.RECEIVE_CURRENT_QUESTION, 
  data: question
});

export const updateIndex = index => ({ type: c.UPDATE_INDEX, data: index });
export const updateQuizStatus = status => ({ type: c.UPDATE_STATUS, data: status });
// fetches questions based on selected category/quiz id
export const fetchQuizQuestions = (category) => (
  dispatch => {
    fetch(`/api/trivia/${category}`, {
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(questions => {
      dispatch(receiveQuizQuestions(questions.data));
      dispatch(receiveCurrentQuestion(questions.data[0]));
      dispatch(updateIndex(0));
      dispatch(updateQuizStatus(''));
    })
    .catch(err => dispatch(error(err)));
  }
);

export const updateQuestionStatus = status => ({ type: c.UPDATE_QUESTION_STATUS, data: status });

export const selectOption = option => ({ type: c.SELECT_OPTION, data: option });
export const updateScore = score => ({ type: c.UPDATE_SCORE, data: score });

export const receiveLeaderboardRanks = ranks => ({ type: c.RECEIVE_LEADERBOARD, data: ranks });
export const fetchLeaderboardRanks = () => (
  dispatch => {
    fetch('/api/leaderboard', {
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(ranks => {
      dispatch(receiveLeaderboardRanks(ranks.data));
    })
    .catch(err => dispatch(error(err)));
  }
);

export const addExercise = (obj) => {
  const payload = JSON.stringify(obj);
  return dispatch => (
    fetch('/api/addExercise', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .catch(err => dispatch(error(err)))
  );
};

export const addFood = (obj) => {
  const payload = JSON.stringify(obj);
  return dispatch => (
    fetch('/api/addFood', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .catch(err => dispatch(error(err)))
  );
};

export const addSleep = (obj) => {
  const payload = JSON.stringify(obj);
  return dispatch => (
    fetch('/api/addSleep', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .catch(err => dispatch(error(err)))
  );
};

export const fetchTips = () => (
  dispatch => (
    fetch('/api/tips', {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(tips => dispatch(receiveTips(tips)))
    .catch(err => dispatch(error(err)))
  )
);

export const fetchMessages = (obj) => {
  const payload = JSON.stringify(obj);
  return dispatch => (
    fetch('/api/getmessages', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(response => {
      dispatch(receiveMessages(response.data));
    })
    .catch(err => dispatch(error(err)))
  );
};

export const sendMessage = (obj) => {
  const payload = JSON.stringify(obj);
  return dispatch => (
    fetch('/api/sendmessage', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(response => {
      dispatch(addMessage(response.data));
    })
    .catch(err => dispatch(error(err)))
  );
};
