// const flatNotes = ['Ab', 'Bb', 'Db', 'Eb', 'Gb']; // prolly not needed?
// const sharpNotes = ['G#', 'A#', 'C#', 'D#', 'F#']; // prolly not needed?
const notesNatural = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notesFlats = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
const notesSharps = ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'];
// notesBoth may screw up array indexing... possible to "borrow"/swap index from sharp/flat array?
const notesBoth = ['G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G'];

const scaleModes = ['Ionian (Major)', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian (Minor)', 'Locrian'];
const triadChordQualities = ['Major', 'minor', 'Augmented (+)', 'Diminished (o)'];
const seventhChordQualities = ['Major 7', 'Dominant 7', 'minor 7', 'Half Diminished 7 (min7b5)', '(Fully) Diminished 7'];

let cycleOfFourths = [];
let circleOfFifths = [];

let noteChoice = 'C'


// REMINDER: FUNCS ARE HARD CODED USING notesFlats ARRAY. I will need to make them dynamic based on user accidental selection (notesFlats, notesSharps, or notesBoth)... return error if notesNatural is selected.

// Start Cycle of Fourths off the given note... should probably use .map()?... solve it first!
let cycleOffNote = function (note) {
  cycleOfFourths.push(note);
  for (let i = 0; i < 12; i++) {
    let prevNoteIndex = notesFlats.indexOf(cycleOfFourths[i])
    let currentNoteIndex = prevNoteIndex + 5
    let cycledIndex = currentNoteIndex - (notesFlats.length)
    if (currentNoteIndex > 12) {
      cycleOfFourths.push(notesFlats[cycledIndex]);
    } else if (currentNoteIndex < 12) {
      cycleOfFourths.push(notesFlats[currentNoteIndex]);
    } else if (currentNoteIndex === 12) {
      cycleOfFourths.push(notesFlats[0]);
    }
  };
  return cycleOfFourths;
};

// Start Circle of Fifths off the given note... should probably use .map()?... solve it first!
let circleOffNote = function (note) {
  circleOfFifths.push(note);
  for (let i = 0; i < 12; i++) {
    let prevNoteIndex = notesFlats.indexOf(circleOfFifths[i])
    let currentNoteIndex = prevNoteIndex - 5
    let cycledIndex = (notesFlats.length) + currentNoteIndex
    if (currentNoteIndex < 0) {
      circleOfFifths.push(notesFlats[cycledIndex]);
    } else if (currentNoteIndex < 12) {
      circleOfFifths.push(notesFlats[currentNoteIndex]);
    } else if (currentNoteIndex === 12) {
      circleOfFifths.push(notesFlats[0]);
    }
  };
  return circleOfFifths;
};

// testing funcs
console.log(cycleOffNote(noteChoice));
console.log(circleOffNote(noteChoice));