import { PLAY_PRACTICE, PAUSE_PRACTICE, STOP_PRACTICE, RESET_PRACTICE } from "../actions";

const initialState = {
  practiceRunning: false,
  practicePaused: false,
  timeRemaining: null,
  tempo: null,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_PRACTICE:
      return { ...state, practiceRunning: action.payload.practiceRunning, practicePaused: action.payload.practicePaused,};
    case PAUSE_PRACTICE:
      return { ...state, practicePaused: action.payload.practicePaused };
    case STOP_PRACTICE:
      return { ...state, practiceRunning: action.payload, practicePaused: action.payload };
    case RESET_PRACTICE:
      return { ...state, practiceRunning: action.payload, practicePaused: action.payload };
    default:
      return state;
  };
};