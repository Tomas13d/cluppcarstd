import { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import swal from "sweetalert";
import { addNewVehicle } from "../../services/vehiclesActions";
import "./addCarForm.css";

function AddCarForm() {
  const [values, setValues] = useState({
    brand: "",
    model: "",
    year: "",
  });
  const [errorHandler, setErrorHandler] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if(token){
        await addNewVehicle({token, values});
      }
      swal({
        text: "Vehicle Added!",
        icon: "success",
      });
    } catch (err) {
      setErrorHandler(`Error: ${err}`);
      swal({
        text: "Error!",
        icon: "error",
      });
    }
    setLoading(false);
  };

  return (
    <Container className="register-cont d-flex justify-content-center align-items-center">
      <div className="background-container">
        <div className="shape3"></div>
      </div>
      <Container className="register-form-cont col-sm-10 col-md-8 col-lg-8 col-xl-6">
        <h2 className="form-title">Add New Vehicle</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="Brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="ej: BMW"
              name="brand"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="ej: f250"
              name="model"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Model">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="ej: 2022"
              name="year"
              onChange={handleChange}
            />
          </Form.Group>
          {errorHandler && <Alert variant="danger">{errorHandler}</Alert>}
          <Button disabled={loading} variant="primary" type="submit">
            Add Vehicle
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default AddCarForm;
