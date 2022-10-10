import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Idea_template } from './Idea_template';
import { useState } from 'react'; 
import "../Ideas_Componentes/styles/ideas.css";
export function Ideas_cuerpo() {
  const [Adultos, setAdultos] = useState(0);
  const [niños, setNiños] = useState(0);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [clase, setClase] = useState("");
  const [ida, setIda] = useState("");
  const [vuelta, setVuelta] = useState("");
  console.log(clase);
  console.log(origen);
  console.log(destino);
  console.log(ida);
  console.log(vuelta);


  return (
    <div>
        <h1>!Crea tus ideas de viaje para visitar mas tarde¡</h1>
        <br />
      	<br />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 lg-4 md-4 sm-12">
          <Idea_template></Idea_template>
            </div>
            <div className="col-xl-4 lg-4 md-4 sm-12">

            </div>
            <div className="col-xl-4 lg-4 md-4 sm-12">
            <Form>
                <div  className="container">
                    <div id="contenedor1" className="row">
                        <h1>Crear idea</h1>
                            <div id='origen' className="col-xl-12">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><h4>Origen</h4> </Form.Label>
                                    <Form.Control id='origen' onChange={(e)=>{setOrigen(e.target.value)}} type="email" placeholder="Ingrese origen" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-xl-12">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><h4>Destino</h4></Form.Label>
                                <Form.Control onChange={(e)=>{setDestino(e.target.value)}} id='destino' type="text" placeholder="Destino" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                            </div>
                            <div>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                  <Form.Label><h4>Fecha ida</h4></Form.Label>
                                  <Form.Control onChange={(e)=>{setIda(e.target.value)}} type="date" placeholder="Destino" />
                              </Form.Group>  
                              </div>
                              <div >
                                  <Form.Group className="mb-3" controlId="formBasicPassword">
                                      <Form.Label><h4>Fecha vuelta</h4></Form.Label>
                                      <Form.Control onChange={(e)=>{setVuelta(e.target.value)}} type="date" placeholder="Destino" />
                                  </Form.Group>  
                            </div>
                            <Form.Label> <h4>Clase</h4> </Form.Label>
                            <Form.Group>
                                <select onClick={(e)=>{setClase(e.target.value)}} name="Clases" id="Clases">
                                    <option value="Economica">Economica</option>
                                    <option value="Ejecutiva">Ejecutiva</option>
                                    <option value="Primera Clase">Primera Clase</option>
                                    <option value="Premium Economy">Premium Economy</option>
                                </select>
                            </Form.Group>
                            <Form.Group id='centrar'>
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
                            <div className="col-xl-12">
                                <Button variant="primary" type="submit">
                                    Añadir
                                </Button>
                            </div>
                        
                        <br />
                        <br />
              
                    </div>
                        
                </div>
                
            </Form>
            </div>

          </div>
          
        </div>
        
    </div>
  )
}

