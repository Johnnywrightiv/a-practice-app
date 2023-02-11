import { PLAY_PRACTICE, PAUSE_PRACTICE, STOP_PRACTICE, RESET_PRACTICE } from "../Actions";

const initialState = {
  practiceRunning: false,
  practicePaused: false,
  tempo: null,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
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