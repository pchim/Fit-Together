import {
  RECEIVE_USER,
  RECEIVE_TEAMS,
  RECEIVE_OTHER_TEAMS,
  RECEIVE_MEMBERS,
  CREATE_TEAM,
  REMOVE_TEAM,
  REQUEST_ERROR,
  RECEIVE_EXERCISE,
  RECEIVE_FOOD,
  RECEIVE_MEM,
  RECEIVE_ACTIVITIES,
  RECEIVE_SLEEP,
  JOIN_TEAM,
  REMOVE_OTHER_TEAM,
  ADD_OTHER_TEAM,
  RECEIVE_MESSAGES,
  RECEIVE_QUESTIONS,
  RECEIVE_CURRENT_QUESTION,
  SELECT_OPTION,
  UPDATE_SCORE,
  ADD_MESSAGE,
  UPDATE_STATUS,
  UPDATE_INDEX,
  RECEIVE_TIP,
  RECEIVE_LEADERBOARD,
  UPDATE_QUESTION_STATUS
} from '../constants/constants.js';

export const user = (state, action) => {
  switch (action.type) {
    case RECEIVE_USER: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const teams = (state, action) => {
  switch (action.type) {
    case RECEIVE_TEAMS: {
      return action.data || state;
    }
    case CREATE_TEAM: {
      return state.concat([action.data]);
    }
    case REMOVE_TEAM: {
      return state.filter(c => c.team_id.toString() !== action.data.team_id.toString());
    }
    case JOIN_TEAM: {
      return state.concat([action.data]);
    }
    default:
      return state || {};
  }
};

export const otherteams = (state, action) => {
  switch (action.type) {
    case RECEIVE_OTHER_TEAMS: {
      return action.data || state;
    }
    case ADD_OTHER_TEAM: {
      return state.concat([action.data]);
    }
    case REMOVE_OTHER_TEAM: {
      return state.filter(c => {
        return c.team_id.toString() !== action.data.team_id.toString();
      });
    }
    default:
      return state || {};
  }
};

export const members = (state, action) => {
  switch (action.type) {
    case RECEIVE_MEMBERS: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};


export const sleep = (state, action) => {
  switch (action.type) {
    case RECEIVE_SLEEP: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const error = (state, action) => {
  switch (action.type) {
    case REQUEST_ERROR: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const activities = (state, action) => {
  switch (action.type) {
    case RECEIVE_ACTIVITIES: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const questions = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};

export const question = (state, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_QUESTION: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const selectedOption = (state, action) => {
  switch (action.type) {
    case SELECT_OPTION: {
      return action.data || state;
    }
    default:
      return state || '';
  }
};

export const score = (state, action) => {
  switch (action.type) {
    case UPDATE_SCORE: {
      return action.data || state;
    }
    default:
      return state || 0;
  }
};

export const messages = (state, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES: {
      return action.data || state;
    }
    case ADD_MESSAGE: {
      return state.concat([action.data]);
    }
    default:
      return state || {};
  }
};

export const quizStatus = (state, action) => {
  switch (action.type) {
    case UPDATE_STATUS: {
      return action.data || state;
    }
    default:
      return state || '';
  }
};

export const questionStatus = (state, action) => {
  switch (action.type) {
    case UPDATE_QUESTION_STATUS: {
      return action.data || state;
    }
    default:
      return state || '';
  }
};

export const index = (state, action) => {
  switch (action.type) {
    case UPDATE_INDEX: {
      return action.data || state;
    }
    default:
      return state || 0;
  }
};

export const tips = (state, action) => {
  switch (action.type) {
    case RECEIVE_TIP: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const leaderboard = (state, action) => {
  switch (action.type) {
    case RECEIVE_LEADERBOARD: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};
