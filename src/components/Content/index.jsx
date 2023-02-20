import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router";
import Cards from "../Cards";
import SingleCar from "../SingleCar";
import "./content.css";

function Content({ carList, error, handleDelete }) {
  const { content } = useParams();
  return (
    <Container className="cards-cont">
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : content === "vehicle" ? (
        <SingleCar handleDelete={handleDelete} />
      ) : carList && carList.length > 0 ? (
        carList.map((car, i) => (
          <Cards car={car} i={i} handleDelete={handleDelete} />
        ))
      ) : (
        <h4 className="text-light">There are no loaded vehicles</h4>
      )}
    </Container>
  );
}

export default Content;
