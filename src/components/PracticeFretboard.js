import { useState } from "react";
import { Row, Button, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { playPractice, pausePractice, stopPractice } from "../Actions";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faStop, faGear, faWrench } from '@fortawesome/free-solid-svg-icons';
import Timer from "./Timer";
import Metronome from './Metronome';

import musicLogic from "../music-logic.js"

const PracticeFretboard = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.state)
  const [startCountdown, setStartCountdown] = useState(false);
  const [practiceLength, setPracticeLength] = useState();
  const [showSettings, setShowSettings] = useState(false);
  const [numberStrings, setNumberStrings] = useState(6);
  const [useRandomNotes, setUseRandomNotes] = useState(false);
  const [changeNote, setChangeNote] = useState(false);
  const [accidentalSelection, setAccidentalSelection] = useState('None');

  const handlePlayPauseClick = () => {
    if (!state.practiceRunning || state.practicePaused) {
      if (practiceLength && practiceLength > 0) {
        setShowSettings(false);
        setStartCountdown(true);
        dispatch(playPractice());
      } else {
        alert('Enter a number greater than 0 and press Play.')
      }
    } else {
      dispatch(pausePractice());
    } 
  };

  const handleStopClick = () => {
    setStartCountdown(false);
    setPracticeLength(undefined); // resets practice length on stop. maybe remove for quick re-start?
    dispatch(stopPractice());
  };

  const handleSettingsClick = () => {
    if (!state.practiceRunning || state.practicePaused) {
      setShowSettings(!showSettings);
    }
  };

  return (
    <Row>
      <h1>Fretboard Practice</h1>
      <h5>(Note Memorization)</h5>

      <div id="note-display-area" className="">
        <div id="current-note">F</div>
        <div className="text-center mb-3">Next Note: <span id="next-note">Bb</span></div>
      </div>

      {!state.practiceRunning ? (
        <Form.Group 
          className="mt-2 mb-2 col-6 offset-3 text-center" 
          id="practice-length"
          controlId="practice-time">
          <Form.Label 
            id="time-header"
            className="">Practice Time:</Form.Label>
          <Form.Control 
            onChange={(e) => setPracticeLength(parseInt(e.target.value))}
            className="text-center" 
            type="number" 
            placeholder="# of minutes to practice"
            min="1" 
            max="30" />
        </Form.Group>
      ) : (
        <Timer minutes={practiceLength} />
      )}

      <div id="control-buttons">
        <Button 
          variant="success m-1" 
          onClick={handlePlayPauseClick}
          style={{ width: 50, height: 50, padding: 0, margin: 0 }}
          ><FontAwesomeIcon 
          icon={state.practiceRunning && !state.practicePaused ? faPause : faPlay} 
          style={{ fontSize: 30 }} 
        />
        </Button>
        <Button 
          variant="danger m-1" 
          onClick={handleStopClick}
          ><FontAwesomeIcon icon={faStop} style={{ fontSize: 30 }}/>
        </Button>
        <Button 
          variant="secondary m-1" 
          disabled={state.practiceRunning && !state.practicePaused}
          onClick={handleSettingsClick}
          ><FontAwesomeIcon icon={faGear} style={{ fontSize: 30 }} />
        </Button>

        <Metronome />

        {showSettings && (
          <div>
            <hr />
            <h5 id="settings-header">Practice Settings:</h5>
            <div className="d-flex justify-content-center">
              <Form id="fretboard-settings">
                <Form.Group
                  className="pb-4 col settings-option"
                  controlId="number-of-strings">
                  <Form.Label># of Strings:</Form.Label>
                  <Form.Control
                    onChange={(e) => setNumberStrings(parseInt(e.target.value))}
                    className="text-center"
                    type="number"
                    value={numberStrings} 
                    min="4" 
                    max="8" />
                </Form.Group>

                <Form.Group
                  className="pb-4 col settings-option"
                  controlId="random-notes">
                  <Form.Check
                    onChange={(e) => setUseRandomNotes(e.target.checked)}
                    type="switch"
                    label="Use Random Notes" />
                  <Form.Text 
                    className="text-muted">
                    or loop through the cycle of 4ths / circle of 5ths
                  </Form.Text>
                </Form.Group>
                
                <Form.Group
                  className="pb-4 col settings-option"
                  controlId="change-note-on-direction-change">
                  <Form.Check
                    type="switch"
                    label="Change Note with Direction" 
                    onChange={(e) => setChangeNote(e.target.checked)}
                    />
                  <Form.Text 
                    className="text-muted">
                    play different notes while ascending & descending
                  </Form.Text>
                </Form.Group>

                {/* <Form.Group
                  className="pb-3 col settings-option"
                  controlId="repeat-top-bottom-note">
                  <Form.Check
                    type="switch"
                    label="Repeat Top & Bottom Notes" />
                  <Form.Text 
                    className="text-muted">
                    play root again before next note
                  </Form.Text>
                </Form.Group> */}

                <Form.Group 
                  controlId="accidental-selection"
                  className="settings-option pb-3">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Form.Label>Accidentals: </Form.Label>
                    <ButtonGroup toggle>
                      <ToggleButton
                        type="radio"
                        name="options"
                        variant="outline-primary"
                        value="None"
                        checked={accidentalSelection === 'None'}
                        onClick={() => setAccidentalSelection('None')}
                      >
                        None
                      </ToggleButton>
                      <ToggleButton
                        type="radio"
                        name="options"
                        variant="outline-primary"
                        value="Sharps"
                        checked={accidentalSelection === 'Sharps'}
                        onClick={() => setAccidentalSelection('Sharps')}
                      >
                        Sharps (#)
                      </ToggleButton>
                      <ToggleButton
                        type="radio"
                        name="options"
                        variant="outline-primary"
                        value="Flats"
                        checked={accidentalSelection === 'Flats'}
                        onClick={() => setAccidentalSelection('Flats')}
                      >
                        Flats (b)
                      </ToggleButton>
                      <ToggleButton
                        type="radio"
                        name="options"
                        variant="outline-primary"
                        value="Both"
                        checked={accidentalSelection === 'Both'}
                        onClick={() => setAccidentalSelection('Both')}
                      >
                        Both (All Notes)
                      </ToggleButton>
                    </ButtonGroup>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </div>
        )}
      </div>
    </Row>
  );
}

export default PracticeFretboard;