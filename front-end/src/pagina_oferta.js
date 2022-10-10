import React from 'react';
import ReactDOM from 'react-dom/client';
import {Ofertas_Main} from "./components/Ofertas_Componentes/Ofertas_Main";
import {Footer} from "./components/Index_Components/footer"
import "./components/Ofertas_Componentes/styles/ofertas_main.css"
import { Navbar_Oferta } from './components/Ofertas_Componentes/navbar';
import { Filtrar } from './components/Ofertas_Componentes/Filtrar';
const root = ReactDOM.createRoot(document.getElementById("root"));
export function Pagina_oferta() {
    root.render(<>
    <Navbar_Oferta></Navbar_Oferta>
    <div id="padretotal">
        <div id='padre1' className="container">     
                <div className="row">
                    <div className="col">
                        <Ofertas_Main></Ofertas_Main>
                    </div>
                    <div className="col">
                        <Ofertas_Main></Ofertas_Main>
                    </div>   
                    <div className="col">
                    <Filtrar></Filtrar>                 
                    </div>                   
                    

                    
                </div>
            <div className="col">
            </div>
        </div>
    </div>
        <div>
            <Footer></Footer>
        </div>
        </>
    )
}
