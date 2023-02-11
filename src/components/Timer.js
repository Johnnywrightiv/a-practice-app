import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Timer = ({ minutes }) => {
  const [minutesLeft, setMinutesLeft] = useState(parseInt(minutes, 10) || 0);
  const [seconds, setSeconds] = useState(0);
  const state = useSelector(state => state.state)

  useEffect(() => {
    let interval = null;
    if (state.practiceRunning && !state.practicePaused) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutesLeft === 0) {
            clearInterval(interval);
          } else {
            setMinutesLeft(minutesLeft - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [state.practiceRunning, state.practicePaused, minutesLeft, seconds]);

  return (
    <div id='countdown-timer'>
      <h1>{`${minutesLeft}:${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
    </div>
  );
};  

export default Timer;
