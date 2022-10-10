import React from 'react';
import ReactDOM from 'react-dom/client';
import { Formulario } from './components/Login_Componentes/formulario';
import {Footer} from "./components/Index_Components/footer";
import { Navbar_Login } from './components/Login_Componentes/navbar_LogIn';
import { Crear_cuenta } from './components/Login_Componentes/crear_cuenta';
import {Slider_manual} from "./components/Index_Components/slider_manual"
const root = ReactDOM.createRoot(document.getElementById("root"));
export function Login() {
    root.render(<div id='padre_Login_Total'>
    <Navbar_Login></Navbar_Login>
    <hr />

    <div id="padre_login" className="container">
    
    <br />
    <br />
    <div className="row">
        <div className="col-xl-6">
        <Formulario></Formulario>
        </div>
        <div className="col-xl-6">
        <Crear_cuenta></Crear_cuenta>
        </div>
        
    <Slider_manual></Slider_manual>
    </div>
   
    
    
    
    </div>
    <hr />
    <Footer></Footer>
        </div>
    );
    
}
