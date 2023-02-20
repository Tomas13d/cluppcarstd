import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { getSingleVehicle } from "../../services/vehiclesActions";
import "./singleCar.css";

function SingleCar({  handleDelete }) {
  const [singleCar, setSingleCar] = useState({});
  const [params] = useSearchParams()

  useEffect(() => {
    const singleCarData = async () => {
      try {
        const id = params.get("id")
        const token = window.localStorage.getItem("token");
         const single = await getSingleVehicle({ token, id });
        setSingleCar(single);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    singleCarData()
  }, []);

  return singleCar && (
    <Card className="custom-cards">
      <div className="img-cont">
        <i className="car-icon-custom bi bi-car-front-fill"></i>
      </div>
      <Card.Body>
        <Card.Title>{singleCar.brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{singleCar.year}</Card.Subtitle>
        <Card.Text>{singleCar.model}</Card.Text>
        <div className="trash-cont" onClick={() => handleDelete(singleCar.id)}>
          <i className="bi bi-trash3"></i>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SingleCar;
