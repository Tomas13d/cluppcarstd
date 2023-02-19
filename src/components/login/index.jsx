import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorHandler, setErrorHandler] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <Container className="register-cont d-flex justify-content-center align-items-center">
      <div class="background-container">
        <circle className="shape2"></circle>
      </div>
      <Container className="register-form-cont col-sm-10 col-md-8 col-lg-8 col-xl-6">
        <h2 className="form-title">Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Text className="text-danger">
             {errorHandler}
            </Form.Text>
          <Button variant="primary" type="submit">
           Log In
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default Login;
