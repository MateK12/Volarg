
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styles/form_vuelos.css"

import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react'; 
export function Form_vuelos() {
    const [Adultos, setAdultos] = useState(0);
    const [niños, setNiños] = useState(0);
  return <>
    <br />
    <br />
    <Form>
        <div  className="container">
            <div id="contenedor" className="row">
                    <div id='origen' className="col-xl-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h4>Origen</h4> </Form.Label>
                            <Form.Control type="email" placeholder="Ingrese origen" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className="col-xl-3">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><h4>Destino</h4></Form.Label>
                        <Form.Control type="text" placeholder="Destino" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    </div>
                    <div className="col-xl-2">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><h4>Fecha ida</h4></Form.Label>
                        <Form.Control type="date" placeholder="Destino" />
                    </Form.Group>  
                    </div>
                    <div className="col-xl-2">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h4>Fecha vuelta</h4></Form.Label>
                            <Form.Control type="date" placeholder="Destino" />
                        </Form.Group>  
                    </div>
                    <div className="col-xl-2">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> <h4>Clase</h4> </Form.Label>
                            <Form.Group>
                                <select name="Clases" id="Clases">
                                    <option value="Economica">Economica</option>
                                    <option value="Ejecutiva">Ejecutiva</option>
                                    <option value="Primera Clase">Primera Clase</option>
                                    <option value="Premium Economy">Premium Economy</option>
                                </select>
                                
                            </Form.Group>
                            <br />
                            
                            <Form.Group>
                                <div className='label_personas'>
                                <NavDropdown class="label_personas" title="Pasajeros" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Adultos {Adultos} 
                                    <Button id='sumar' onClick={(e)=>{setAdultos(Adultos + 1)}}>+</Button>
                                    <Button id='restar' onClick={(e)=>{setAdultos(Adultos - 1)}}>-</Button>
                                </NavDropdown.Item>
                                <hr />
                                <NavDropdown.Item href="#action/3.2">Niños {niños}
                                    <Button id='sumar' onClick={(e)=>{setNiños(niños + 1)}}>+</Button>
                                    <Button id='restar' onClick={(e)=>{setNiños(niños - 1)}}>-</Button>
                                </NavDropdown.Item>
                                </NavDropdown>
                                </div>
                            </Form.Group>
                        </Form.Group>  
                    </div>
                <div className="col-xl-3">
                    <Button variant="primary" type="submit">
                        Buscar
                    </Button>
                </div>
                <div className="col-xl-3">
                     <Form.Check type="checkbox" label="Solo ida"/>
                </div>
                <div className="col-xl-3">
                     <Form.Check type="checkbox" label="Ida y vuelta"/>
                </div>
                <div className="col-xl-3">
                     <Form.Check type="checkbox" label="Sin escalas"/>
                </div>
                <br />
                <br />
      
            </div>
                
        </div>
         
    </Form>
  </>
}

