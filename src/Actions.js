export const PLAY_PRACTICE = "PLAY_PRACTICE";
export const PAUSE_PRACTICE = "PAUSE_PRACTICE";
export const STOP_PRACTICE = "STOP_PRACTICE";


export function playPractice() {
  return {
    type: PLAY_PRACTICE,
    payload: {
      practiceRunning: true,
      practicePaused: false,
    },
  };
};

export function pausePractice() {
  return {
    type: PAUSE_PRACTICE,
    payload: {
      practiceRunning: false,
      practicePaused: true,
    },
  };
};

export function stopPractice() {
  return {
    type: STOP_PRACTICE,
    payload: {
      practiceRunning: false,
      practicePaused: false,
    },
  };
};