import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react'; 
import "../Ofertas_Componentes/styles/Filtrar.css"

export function Filtrar() {

  return <>
    <br />
    <br />
    <Form>
        <div  className="container">
            <div id="contenedor1" className="row">
                <h1>Filtrar por</h1>
                    <div id='origen' className="col-xl-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h4>Origen</h4> </Form.Label>
                            <Form.Control type="email" placeholder="Ingrese origen" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className="col-xl-12">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><h4>Destino</h4></Form.Label>
                        <Form.Control type="text" placeholder="Destino" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    </div>
                    
                    <div className="col-xl-2">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> <h4>Precio maximo</h4> </Form.Label>
                            <Form.Group>
                                <input id='precio_input' type="range" min="0" max="300.000" />
                                
                            </Form.Group>
                            <br />
                            
                        </Form.Group>  
                    </div>
                    <div className="col-xl-12">
                        <Button variant="primary" type="submit">
                            Filtrar
                        </Button>
                    </div>
                
                <br />
                <br />
      
            </div>
                
        </div>
         
    </Form>
    </>
    
}

