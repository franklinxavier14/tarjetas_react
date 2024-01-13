import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MyCard = ({ imagen, nombre, descripcion, raza, badgeVariant }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <h5 className="raza">
        <Badge className={`bg-${badgeVariant}`}>{raza}</Badge>
        </h5>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
