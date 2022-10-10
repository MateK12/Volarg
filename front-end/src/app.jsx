import React from 'react';
import ReactDOM from 'react-dom/client';
import {Barra} from "./components/Index_Components/navbar"
import {Form_vuelos} from "./components/Index_Components/form_vuelos"
import { Slider } from './components/Index_Components/slider';
import { Ofertas } from './components/Index_Components/ofertas';
import { Footer } from './components/Index_Components/footer';
import { Slider_nacionales } from './components/Index_Components/slider_nacionales';
import { Link,Route,BrowserRouter } from 'react-router-dom';
import "../src/components/Index_Components/styles/index.css"
 export function App() {
     return <>
    <div id='padre'>
        

        <Barra></Barra>
        <hr />
        <Form_vuelos></Form_vuelos>
        <br />
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
    </div>
    </>
    
}
