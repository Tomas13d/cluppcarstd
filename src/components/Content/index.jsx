import { Alert, Container } from "react-bootstrap";
import Cards from "../Cards";
import "./content.css";

function Content({carList, error}) {

  return (
    <Container className="cards-cont">
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : carList.length > 0 ? (
        carList.map((car, i) => <Cards car={car} i={i}/>)
      ) : (
        <h4 className="text-light">There are no loaded vehicles</h4>
      )}
    </Container>
  );
}

export default Content;
