import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import canada from "../assets/img/canada.jpg";
import "./styles/ofertas.css"
export function Ofertas() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={canada} />
      <div className='body'>
        <Card.Body>
          <Card.Title>Canada</Card.Title>
          <Card.Text>
            Descubre este hermoso pais y todo lo que tiene para ofrecerte.
          </Card.Text>
          <Button variant="primary">Ver oferta</Button>
        </Card.Body>
      </div>
    </Card>
    <br />
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={canada} />
    <div className='body'>
      <Card.Body>
        <Card.Title>Canada</Card.Title>
        <Card.Text>
          Descubre este hermoso pais y todo lo que tiene para ofrecerte.
        </Card.Text>
        <Button variant="primary"> <a href="../../public/Oferta.html">Ver oferta</a> </Button>
      </Card.Body>
    </div>
  </Card>
    <br />
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={canada} />
    <div className='body'>
      <Card.Body>
        <Card.Title>Canada</Card.Title>
        <Card.Text>
          Descubre este hermoso pais y todo lo que tiene para ofrecerte.
        </Card.Text>
        <Button variant="primary">Ver oferta</Button>
      </Card.Body>
    </div>
  </Card>
  </>
  )
}

