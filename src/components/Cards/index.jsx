
import { Card } from "react-bootstrap";
import "./cards.css";

function Cards({car, i}) {
  return (
    <Card className="custom-cards" key={i}>
      <Card.Body>
        <Card.Title>{car.model}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{car.brand}</Card.Subtitle>
        <Card.Text>{car.year}
        </Card.Text>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
