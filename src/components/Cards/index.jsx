import { Card } from "react-bootstrap";
import "./cards.css";

function Cards({ car, i, handleDelete }) {
  return (
    <Card className="custom-cards" key={i}>
      <Card.Body>
      <Card.Text className="id-card-ref text-muted">{`# ${car.id}`}</Card.Text>
        <Card.Title>{car.brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{car.year}</Card.Subtitle>
        <Card.Text>{car.model}</Card.Text>
        <div className="trash-cont" onClick={() => handleDelete(car.id)}>
          <i className="bi bi-trash3"></i>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
