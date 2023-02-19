import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import swal from "sweetalert";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorHandler, setErrorHandler] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorHandler("");
      setLoading(true);
      await login(values.email, values.password)
        swal({
          text: "Login Successfully!",
          icon: "success",
          buttons: false,
          timer: 1000
        });
        navigate("/");
    } catch (err) {
      swal({
        text: "Failed to Log in",
        icon: "error",
      });
    }
    setLoading(false);
  };


  return (
    <Container className="register-cont d-flex justify-content-center align-items-center">
      <div className="background-container">
        <div className="shape2"></div>
      </div>
      <Container className="register-form-cont col-sm-10 col-md-8 col-lg-8 col-xl-6">
        <h2 className="form-title">Login</h2>
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
          {errorHandler && <Alert variant="danger">{errorHandler}</Alert>}
          <Button disabled={loading} variant="primary" type="submit">
           Log In
          </Button>
          <div className="w-100 text-center bottom-text">
            You dont have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Form>
      </Container>
    </Container>
  );
}

export default Login;
