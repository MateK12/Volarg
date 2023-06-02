import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import avion from "../assets/img/viajar.png";
import {App} from "../../app";
import {Login} from "../../login";
import { Ideas } from '../../ideas';
import { Link,Route ,Switch ,BrowserRouter } from 'react-router-dom';
import { Prueba_props } from '../../prueba_prop';
import { reload } from '../../app';
export function Navbar_Oferta() {
  return (
    <nav>
      <h1></h1>
    <Navbar bg="light" expand="lg">
      <Container>

      <img src={avion} alt="" />
        <Navbar.Brand href="#home">VolARG</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <BrowserRouter>
              <Link onClick={reload}  to='/'><Nav.Link href="#link">Pagina principal</Nav.Link></Link>
              <Link onClick={reload} to='Quienes_Somos'><Nav.Link href="#home">¿Quienes somos?</Nav.Link></Link>
              <Link onClick={reload} to='Inicio'><Nav.Link href="#link">Iniciar sesión</Nav.Link></Link>
              <Link onClick={reload} to='Ideas'><Nav.Link href="#link">Ideas</Nav.Link></Link>

              <Switch>
                  <Route path='/Inicio'><Login></Login></Route>
                  <Route path='/Ideas'><Ideas></Ideas></Route>
                  <Route path='/' exact><App></App></Route>


              </Switch>
            </BrowserRouter>
            <NavDropdown title="Destinos del momento" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">USA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Qatar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">      <Prueba_props nombre="ddd"></Prueba_props></NavDropdown.Item>
              <NavDropdown.Divider />
           
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </nav>
  )
}
