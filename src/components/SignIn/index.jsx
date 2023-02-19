import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../contexts/AuthContext";
import "./SignIn.css";

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { singup } = useAuth();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password !== values.confPassword)
      return setError("Passwords do not match");
    try {
      setError("");
      setLoading(true);
      await singup(values.email, values.password)
        swal({
          text: "Sign Up Successfully!",
          icon: "success",
          buttons: false,
          timer: 1000
        });

    } catch (err) {
      swal({
        text: "Faild to Sign Up",
        icon: "error",
      });
    }
    setLoading(false);
  };

  return (
    <Container className="register-cont d-flex justify-content-center align-items-center">
      <div className="background-container">
        <div className="shape1"></div>
      </div>
      <Container className="register-form-cont col-sm-10 col-md-8 col-lg-8 col-xl-6">
        <h2 className="form-title">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
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
          <Form.Group className="mb-3" controlId="confPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="confPassword"
              onChange={handleChange}
            />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button disabled={loading} variant="primary" type="submit">
            Sign Up
          </Button>
          <div className="w-100 text-center bottom-text">
            Already have an account? <Link to="/login">Log In</Link> 
          </div>
        </Form>
      </Container>
    </Container>
  );
}

export default SignIn;
