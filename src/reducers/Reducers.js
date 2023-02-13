import { PLAY_PRACTICE, PAUSE_PRACTICE, STOP_PRACTICE, LOGIN } from "../Actions";

const initialState = {
  loggedIn: false,
  practiceRunning: false,
  practicePaused: false,
  tempo: null,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: action.payload.loggedIn}
    case PLAY_PRACTICE:
      return { ...state, practiceRunning: action.payload.practiceRunning, practicePaused: action.payload.practicePaused,};
    case PAUSE_PRACTICE:
      return { ...state, practicePaused: action.payload.practicePaused };
    case STOP_PRACTICE:
      return { ...state, practiceRunning: action.payload.practiceRunning, practicePaused: action.payload.practicePaused };
    default:
      return state;
  };
};