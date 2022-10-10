import React from 'react';
import camboya from "../assets/img/camboya.jpg";
import grecia from "../assets/img/grecia.jpg";
import estambul from "../assets/img/estambul.jpg";
import marruecos from "../assets/img/Marruecos.jpg";
import { BiWorld } from "react-icons/bi";
import mundo from "../assets/img/mundo.png"

import "./styles/slider.css"
export function Slider() {
  return (
    <div class="slider_div">
      <h3>Destinos internacionales <img src={mundo} alt="" /></h3>
        <ul id='slider_ul'>
            <a href="#"><li class="li"><img className='img' src={camboya}></img><h5 class="destino">Camboya</h5></li></a>
            <a href="#"><li class="li"><img className='img' src={grecia} alt="" /><h5 class="destino">Grecia</h5></li></a>
            <a href="#"><li class="li"><img className='img' src={estambul} alt="" /><h5 class="destino">Estambul</h5></li></a>
            <a href="#"><li class="li"><img className='img' src={marruecos} alt="" /><h5 class="destino">Marruecos</h5></li></a>
        </ul>
    </div>
  )
}

