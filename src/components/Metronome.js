import { useState } from "react";

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
    setBeatsPerMeasure(beatsPerMeasure + 1);
  };

  const handleDecrementBeatsPerMeasure = () => {
    setBeatsPerMeasure(beatsPerMeasure - 1);
  };

  return (
    <div className="metronome">
      <h2>Tempo: {tempo}</h2>
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

      <div className="tempo-controls">
        <button onClick={handleDecrementTempo}>-</button>
        <input
          type="range"
          min="40"
          max="240"
          value={tempo}
          onChange={handleTempoChange}
          className="slider"
        />
        <button onClick={handleIncrementTempo}>+</button>
      </div>
      <h2>Beats per Measure: {beatsPerMeasure}</h2>
      <div className="beats-per-measure-controls">
        <button onClick={handleDecrementBeatsPerMeasure}>-</button>
        <input
          type="number"
          value={beatsPerMeasure}
          onChange={handleBeatsPerMeasureChange}
          min="1"
          max="16"
          className="text-center"
        />
        <button onClick={handleIncrementBeatsPerMeasure}>+</button>
      </div>
    </div>
  );
};

export default Metronome;
