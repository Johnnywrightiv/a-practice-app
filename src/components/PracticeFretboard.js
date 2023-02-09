import { useState } from "react";
import { Row, Button, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { playPractice, pausePractice, stopPractice, resetPractice } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const PracticeFretboard = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.state)
  const [showSettings, setShowSettings] = useState(false);
  const [numberStrings, setNumberStrings] = useState(6);
  const [useRandomNotes, setUseRandomNotes] = useState(false);
  const [changeNoteFreq, setChangeNoteFreq] = useState(false);
  const [practiceLength, setPracticeLength] = useState();
  
  const [accidentalSelection, setAccidentalSelection] = useState('None');

  const handlePlayPauseClick = () => {
    if (!state.practiceRunning || state.practicePaused) {
      dispatch(playPractice())
    } else if (state.practiceRunning) {
      dispatch(pausePractice());
    } 
  };

  const handleStopClick = () => {
    dispatch(stopPractice());
  };

  const handleResetClick = () => {
    dispatch(resetPractice());
  };

  const handleSettingsClick = () => {
    setShowSettings(!showSettings)
  };

  return (
    <Row>
      <h1>Fretboard Practice</h1>
      <h5>(Note Memorization)</h5>

      <div id="note-display-area" className="col-10 offset-1">
        <div id="current-note">F</div>
        <div className="text-center mb-3">Next Note: <span id="next-note">Bb</span></div>
      </div>

      <Form.Group 
        className="pb-4 col-6 offset-3 text-center" 
        id="practice-length"
        controlId="practice-time">
        <Form.Label 
          id="time-header"
          className="m-2 pt-2">Practice Time:</Form.Label>
        <Form.Control 
          onChange={(e) => setPracticeLength(parseInt(e.target.value))}
          className="text-center" 
          type="number" 
          placeholder="# of minutes to practice"
          min="1" 
          max="30" />
      </Form.Group>

      <div id="control-buttons">
        <Button variant="success m-1" onClick={handlePlayPauseClick}>Play/Pause</Button>
        <Button variant="danger m-1" onClick={handleStopClick}>Stop</Button>
        <Button variant="warning m-1" onClick={handleResetClick}>Reset</Button>
        <Button variant="secondary m-1" onClick={handleSettingsClick}>Settings</Button>

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
                    onChange={(e) => setChangeNoteFreq(e.target.checked)}
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