import React from 'react';
import ReactDOM from 'react-dom/client';
import {Form_vuelos} from "./components/Index_Components/form_vuelos"
import { Slider } from './components/Index_Components/slider';
import { Ofertas } from './components/Index_Components/ofertas';
import { Footer } from './components/Index_Components/footer';
import { Slider_nacionales } from './components/Index_Components/slider_nacionales';
import {Login} from './login'
import {Ideas} from './ideas'
import { Pagina_oferta } from './pagina_oferta';
import { Link,Route ,BrowserRouter, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import avion from "../src/components/assets/img/viajar.png";
import "./components/Index_Components/styles/index.css"
import { useState, useEffect } from 'react';
export function reload() {
    setTimeout(()=>{
        window.location.reload()
    },100)
}
 export function App() {
   
    return <>
    <div id='padre'>
    
      
    <nav>
    <Navbar bg="light" expand="lg">
      <Container>
      <img src={avion} alt="" />
        <Navbar.Brand href="#home">VolARG</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <BrowserRouter>
              <Link to=''><Nav.Link href="#home">¿Quienes somos?</Nav.Link></Link>
              <Link onClick={reload} to='Ofertas'><Nav.Link href="#link">Ofertas imperdibles</Nav.Link></Link>
              <Link onClick={reload} to='Inicio'><Nav.Link href="#link">Iniciar sesión</Nav.Link></Link>
              <Link  onClick={reload} to='Ideas'><Nav.Link href="#link">Tus ideas</Nav.Link></Link>
           
            </BrowserRouter>
              
            <NavDropdown title="Destinos del momento" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">USA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Qatar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nueva Zelanda</NavDropdown.Item>
              <NavDropdown.Divider />
           
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </nav>
        <hr />
            <Form_vuelos></Form_vuelos>
            <br />

            
        <BrowserRouter>
        <Switch>
        <Route path='/Inicio'><Login></Login></Route>
        <Route path='/Ofertas'><Pagina_oferta></Pagina_oferta></Route>
        <Route path='/Ideas'><Ideas></Ideas></Route>
        <Route path='/'>
        <div id='contenedor_index' className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-2">
                        <br />
                        <Ofertas></Ofertas>
                        <br />
                    
                    </div>
                    
                    <div className="col-xl-6 lg-10">
                    <br />  
                    <br />
                        <Slider></Slider>
                        <Slider_nacionales></Slider_nacionales>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <Footer></Footer>
        </Route>
   
        </Switch>
        </BrowserRouter>
        
    </div>
    </>
    
}
