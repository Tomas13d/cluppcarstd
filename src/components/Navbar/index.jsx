import { useEffect } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../config/firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./navbar.css";

function NavbarApp({ handleChangeSearch, search, handleSearchSubmit}) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    const generateToken = async () => {
      const user = auth.currentUser;
      const token = user && (await user.getIdToken());
      window.localStorage.setItem("token", token);
    };
    generateToken();
  }, [currentUser]);


  const hanleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <Navbar className="custom-navbar-style" expand="lg">
      <Container fluid className="text-light">
        <Link to="/view/all">
          <Navbar.Brand href="#" className="text-light">
            Clupp Cars
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="custom-colappse" id="navbarScroll">
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={search}
              className="me-2"
              aria-label="Search"
              onChange={handleChangeSearch}
            />
            <Button type="submit" variant="outline-primary">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light logout-button">
              <Link to="/view/addVehicle">Add Vehicle</Link>
            </Nav.Link>
            <Nav.Link className="text-light logout-button" href="#action1" onClick={hanleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
