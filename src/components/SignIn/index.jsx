import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./SignIn.css";

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confPassword: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confPasswordError, setConfPassword] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setTimeout(()=> {
        values.password !== values.confPassword ? setConfPassword("Passwords do not match") : setConfPassword("");
    }, 500)
  }, [values.confPassword]);

  return (
    <Container className="register-cont d-flex justify-content-center align-items-center">
      <div class="background-container">
        <circle className="shape1"></circle>
      </div>
      <Container className="register-form-cont col-sm-10 col-md-8 col-lg-8 col-xl-6">
        <h2 className="form-title">Register</h2>
        <Form>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
            <Form.Text className="text-danger">{emailError}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
             {passwordError}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="confPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="confPassword"
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
             {confPasswordError}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default SignIn;
