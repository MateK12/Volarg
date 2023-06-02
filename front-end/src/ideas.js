import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import avion from "./components/assets/img/viajar.png";
import {App} from  "./app";
import {Login} from "./login";
import { Pagina_oferta } from './pagina_oferta';
import { Link,Route ,Switch ,BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Ideas_cuerpo } from './components/Ideas_Componentes/ideas_cuerpo';
import "./components/Ideas_Componentes/styles/ideas.css";
import { Footer } from './components/Index_Components/footer';
import { reload } from "./app";
const root = ReactDOM.createRoot(document.getElementById("root"));
export function Ideas() {
  root.render(<div id='padre_ideas'>
  <nav>
    <Navbar bg="light" expand="lg">
      <Container>
      <img src={avion} alt="" />
        <Navbar.Brand href="#home">VolARG</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <BrowserRouter>
              <Link onClick={reload} to='/'><Nav.Link href="#link">Pagina principal</Nav.Link></Link>
              <Link onClick={reload} to='Inicio'><Nav.Link href="#link">Iniciar sesión</Nav.Link></Link>
              <Link onClick={reload} to='Ofertas'><Nav.Link href="#link">Ofertas imperdibles</Nav.Link></Link>

              <Switch>
                  <Route path='/Inicio'><Login></Login></Route>
                  <Route path='/Ofertas'><Pagina_oferta></Pagina_oferta></Route>
                  <Route exact path='/'><App></App></Route>
                </Switch>
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
    </nav>      <hr></hr>
      <br/>
      <div id='contenedor_Ideas' className='container'>
      <Ideas_cuerpo></Ideas_cuerpo>
      </div>
      <hr></hr>
    <Footer></Footer>
  </div>)
  
}

