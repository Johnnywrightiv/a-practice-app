import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";

const Metronome = () => {
  const [tempo, setTempo] = useState(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

  const handleTempoChange = event => {
    setTempo(event.target.value);
  };

  const handleIncrementTempo = () => {
    if (parseInt(tempo) !== 240) {
      setTempo(parseInt(tempo) + 1);
    };
  };

  const handleDecrementTempo = () => {
    if (parseInt(tempo) !== 40) {
      setTempo(parseInt(tempo) - 1);
    };
  };

  const handleBeatsPerMeasureChange = event => {
    setBeatsPerMeasure(event.target.value);
  };

  const handleIncrementBeatsPerMeasure = () => {
    if (parseInt(beatsPerMeasure) !== 16) {
      setBeatsPerMeasure(beatsPerMeasure + 1);
    }
  };
  
  const handleDecrementBeatsPerMeasure = () => {
    if (parseInt(beatsPerMeasure) !== 1) {
      setBeatsPerMeasure(beatsPerMeasure - 1);
    }
  };

  return (
    <div className="metronome text-center m-3">
      <h4>Tempo: {tempo}</h4>
      <em>{
          tempo <= 24 ? "Larghissimo" :
          tempo <= 40 ? "Adagissimo" : 
          tempo <= 66 ? "Largo" : 
          tempo <= 76 ? "Adagio" : 
          tempo <= 80 ? "Adagietto" : 
          tempo <= 108 ? "Lento" : 
          tempo <= 112 ? "Andante moderato" : 
          tempo <= 120 ? "Allegretto" : 
          tempo <= 126 ? "Moderato" : 
          tempo <= 156 ? "Allegro" : 
          tempo <= 160 ? "Vivace" : 
          tempo <= 184 ? "Allegrissimo" : 
          tempo <= 200 ? "Presto" : "Prestissimo"
        }</em>

      <div className="tempo-controls" style={{ display: 'flex', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faSquareMinus} role={Button} onClick={handleDecrementTempo} style={{ fontSize: 30 }}/>
        <input
          type="range"
          min="40"
          max="240"
          value={tempo}
          onChange={handleTempoChange}
          className="slider"
        />
        <FontAwesomeIcon icon={faSquarePlus} role={Button} onClick={handleIncrementTempo} style={{ fontSize: 30 }}/>
      </div>
      <br />
      <h5>Beats per Measure: {beatsPerMeasure}</h5>
      <div className="beats-per-measure-controls" style={{ display: 'flex', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faSquareMinus} role={Button} onClick={handleDecrementBeatsPerMeasure} style={{ fontSize: 30 }} />
        <input
          type="number"
          value={beatsPerMeasure}
          onChange={handleBeatsPerMeasureChange}
          min="1"
          max="16"
          className="text-center"
        />
        <FontAwesomeIcon icon={faSquarePlus} role={Button} onClick={handleIncrementBeatsPerMeasure} style={{ fontSize: 30 }} />
      </div>
    </div>
  );
};

export default Metronome;
