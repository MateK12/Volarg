import React from 'react';
import { Navbar_Ideas } from './components/Ideas_Componentes/navbar_ideas';
import ReactDOM from 'react-dom/client';
import { Ideas_cuerpo } from './components/Ideas_Componentes/ideas_cuerpo';
import "./components/Ideas_Componentes/styles/ideas.css";
import { Footer } from './components/Index_Components/footer';
const root = ReactDOM.createRoot(document.getElementById("root"));
export function Ideas() {
  root.render(<div id='padre_ideas'>
      <Navbar_Ideas></Navbar_Ideas> 
      <hr></hr>
      <br/>
      <div id='contenedor_Ideas' className='container'>
      <Ideas_cuerpo></Ideas_cuerpo>
      </div>
      <hr></hr>
    <Footer></Footer>
  </div>)
  
}

