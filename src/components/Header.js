import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <Navbar expand="md">
      <Navbar.Brand as={Link} to="/" id='nav-brand'>Practice App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/fretboard" active={location.pathname === '/fretboard'}>
            Fretboard
          </Nav.Link>
          <Nav.Link as={Link} to="/scales" active={location.pathname === '/scales'}>
            Scales
          </Nav.Link>
          <Nav.Link as={Link} to="/chords" active={location.pathname === '/chords'}>
            Chords
          </Nav.Link>
          <Nav.Link as={Link} to="/more-ideas" active={location.pathname === '/more-ideas'}>
            More Ideas
          </Nav.Link>
        </Nav>
        <Nav.Link className='ms-auto'>Log In</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;