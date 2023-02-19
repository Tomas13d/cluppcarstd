import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { getActiveVehicles } from "../../services/vehiclesActions";
import Cards from "../Cards";
import "./content.css";

function Content() {
  const [carList, setCarList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const elementsToList = async () => {
      try {
        const token = window.localStorage.getItem("token");
        let allCars = await getActiveVehicles(token);
        setCarList(allCars);
      } catch (err) {
        setError(`Error: ${err}`);
      }
    };
    elementsToList();
  }, []);

  return (
    <Container className="cards-cont">
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : carList.length > 0 ? (
        carList.map((car) => <Cards car={car} />)
      ) : (
        <h4 className="text-light">There are no loaded vehicles</h4>
      )}
    </Container>
  );
}

export default Content;
