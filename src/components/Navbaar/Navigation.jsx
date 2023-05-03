import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" style={{padding:'30px'}}>
      <Container>
        <Navbar.Brand href="#home">Twitter clone</Navbar.Brand>
        <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#message">message</Nav.Link>
            <Nav.Link href="#profile">profile</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;