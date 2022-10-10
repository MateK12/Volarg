import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export function Idea_template(props) {
  return <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Destino</Card.Title>
           
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Origen</ListGroup.Item>
            <ListGroup.Item>Ida</ListGroup.Item>
            <ListGroup.Item>Vuelta</ListGroup.Item>
            <ListGroup.Item>Clase</ListGroup.Item>
            <ListGroup.Item>Adultos Niños</ListGroup.Item>
        </ListGroup>
            <Button variant="primary" type="">
                Buscar
            </Button>
        </Card>
    </div>
    
    
}
