import { useState } from "react";
import { Row } from "react-bootstrap";
import { playPractice, pausePractice, stopPractice, resetPractice } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const PracticeFretboard = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.state)
  const [showSettings, setShowSettings] = useState(false);

  const handlePlayPauseClick = () => {
    if (!state.practiceRunning || state.practicePaused) {
      dispatch(playPractice())
    } else if (state.practiceRunning) {
      dispatch(pausePractice());
    } 
  };

  const handleStopClick = () => {
    console.log('state: ', state);
    dispatch(stopPractice());
  };

  const handleResetClick = () => {
    console.log('state: ', state);
    dispatch(resetPractice());
  };

  return (
    <Row>
      <h1>Fretboard Practice (Note Memorization)</h1>
      <div id="current-note">F</div>
      
      <div className="text-center">Next Note: <span>Bb</span></div>
      <div className="text-center">Time Left: <span>
        <input type="number" placeholder="# of minutes to practice" /></span>
      </div>

      {/* <div className="col-6 d-flex justify-content-end">
        <span>Next Note: Bb </span>
      </div>
      <div className="col-6">
        <span>Time Left: </span>
        <span id="minutes-left">00</span>:
        <span id="seconds-left">00</span>
      </div> */}

      <div id="control-buttons">
        <hr />
        <button onClick={handlePlayPauseClick} className="btn btn-success m-1">Play/Pause</button>
        <button onClick={handleStopClick} className="btn btn-danger m-1">Stop</button>
        <button onClick={handleResetClick} className="btn btn-warning m-1">Reset</button>
        <button onClick={() => setShowSettings(!showSettings)} className="btn btn-secondary m-1">Settings</button>
        {showSettings && (
        <div>
          <hr />
          <div>
            <h5>Practice Settings:</h5>
            <input type="checkbox" id="foo" />
            <label htmlFor="foo">Foo</label>
          </div>
        </div>
        )}
      </div>
    </Row>
  );
}

export default PracticeFretboard;