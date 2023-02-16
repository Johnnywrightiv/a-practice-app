import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    const input = prompt("Please enter your username ('admin' for dummy auth test)");
    if (input === 'admin') {
      setLoggedIn(true);
    }
  };

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
        {!loggedIn ? (
          <Nav.Link onClick={handleLogIn}>Log In</Nav.Link>
        ) : (
          <DropdownButton variant='dark' id="dropdown-basic-button" title={<FontAwesomeIcon icon={faUser} />}>
            <Dropdown.Item href="#/user-settings">User Settings</Dropdown.Item>
            <Dropdown.Item href="#/account">My Account</Dropdown.Item>
            <Dropdown.Item href="/">Log Out</Dropdown.Item>
          </DropdownButton>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
