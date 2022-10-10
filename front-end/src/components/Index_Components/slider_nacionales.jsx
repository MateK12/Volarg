import React from 'react';
import BA from "../assets/img/BA.jpg";
import Bariloche from "../assets/img/Bariloche.webp";
import TF from "../assets/img/tierra_fuego.jpg";
import Cataratas from "../assets/img/cataratas.jpg";
import Argentina from "../assets/img/argentina.png";
import "./styles/slider.css"
export function Slider_nacionales() {
  return (
    <div class="slider_div">
      <h3>Destinos nacionales <img src={Argentina} alt="" /></h3>
        <ul id='slider_ul'>
            <a href="#"><li class="li"><img className='img' src={BA}></img><h5 class="destino">Buenos Aires</h5></li></a>
            <a href="#"><li class="li"><img className='img' src={Cataratas} alt="" /><h5 class="destino">Cataratas del Iguazu</h5></li></a>
            <a href="#"><li class="li"><img className='img' src={TF} alt="" /><h5 class="destino">Tierra del fuego</h5></li></a>
            <a href="#"><li class="li"><img className='img' src={Bariloche} alt="" /><h5 class="destino">Bariloche</h5></li></a>
        </ul>
    </div>
  )
}

