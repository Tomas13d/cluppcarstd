
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.css";

function NavbarApp() {
  return (
    <Navbar className="custom-navbar-style" expand="lg">
    <Container fluid className="text-light">
      <Navbar.Brand href="#" className="text-light">Clupp Cars</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse  className="custom-colappse" id="navbarScroll">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className="text-light logout-button" href="#action1">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarApp;
