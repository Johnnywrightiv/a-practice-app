console.log('hey wrld')

// const flatNotes = ['Ab', 'Bb', 'Db', 'Eb', 'Gb']; // prolly not needed?
// const sharpNotes = ['G#', 'A#', 'C#', 'D#', 'F#']; // prolly not needed?
const notesNatural = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notesFlats = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
const notesSharps = ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'];
const notesBoth = ['G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G'];
const scaleModes = ['Ionian (Major)', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian (Minor)', 'Locrian'];
const triadChordQualities = ['Major', 'minor', 'Augmented (+)', 'Diminished (o)'];
const seventhChordQualities = ['Major 7', 'Dominant 7', 'minor 7', 'Half Diminished 7 (min7b5)', '(Fully) Diminished 7'];
let cycleOfFourths = [];
let numStrings = 6;
let tempo = 60;
let numBeatsPerBar = 4;
let direction = 'ascending'; // denotes if currently running up (ascending) or down (descending) a scale
let randomNotes = false; // if true, outputs random notes (based on accidental configurations)
let doubleNoteOnChange = false; // if true, repeats top and bottom notes of scale when direction changes
let changeNoteOnChange = false; // if true, note output will change each time direction changes
let sharps = false;
let flats = false;
let minutes = 10;


