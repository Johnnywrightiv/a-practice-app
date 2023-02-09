import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Metronome from './components/Metronome';
import PracticeFretboard from './components/PracticeFretboard';
import PracticeScales from './components/PracticeScales';
import PracticeChords from './components/PracticeChords';
import MoreIdeas from './components/MorePracticeIdeas';
import NotFound from './components/NotFound';

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        {/* <Metronome /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fretboard" element={<PracticeFretboard />} />
          <Route path="/scales" element={<PracticeScales />} />
          <Route path="/chords" element={<PracticeChords />} />
          <Route path="/more-ideas" element={<MoreIdeas />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;