import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Bahamas from "../assets/img/Bahamas.jpg"
import "./styles/ofertas_main.css"
export function Ofertas_Main() {
  return <>  
  <div className="col-xl-4 lg-4">
  <div class="carta">
      <Card  style={{ width: '18rem'}}>
          <Card.Img variant="top" src={Bahamas} />
          <div className='body'>
              <Card.Body>
              <Card.Title>Bahamas</Card.Title>
              <Card.Text>
                  Sumergete en las mudialmente conocida playa de bahamas.
              </Card.Text>
              <Button variant="primary">Ver oferta</Button>
              </Card.Body>
          </div>
      </Card>
  </div>
</div>
<br /><br /><br /><br /><br /><br /><br />  
  <div className="col-xl-4 lg-4">
  <div class="carta">
      <Card  style={{ width: '18rem'}}>
          <Card.Img variant="top" src={Bahamas} />
          <div className='body'>
              <Card.Body>
              <Card.Title>Bahamas</Card.Title>
              <Card.Text>
                  Sumergete en las mudialmente conocida playa de bahamas.
              </Card.Text>
              <Button variant="primary">Ver oferta</Button>
              </Card.Body>
          </div>
      </Card>
  </div>
</div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  
  
    </>
}
