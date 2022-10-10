import React from 'react'
import BA from "../assets/img/BA.jpg";
import Bariloche from "../assets/img/Bariloche.webp";
import TF from "../assets/img/tierra_fuego.jpg";
import Cataratas from "../assets/img/cataratas.jpg";
import "./styles/slider_manual.css"
export function Slider_manual() {
  return (
    <div id='cuerpo'>
        <ul className="slider">
            <li>
                <input type="radio" id="sbutton1" name='sradio' checked/>
                <label htmlFor="sbutton1"></label>
                <img src={Bariloche} alt="" />
            </li>
            <li>
                <input type="radio" id="sbutton2" name='sradio' />
                <label htmlFor="sbutton2"></label>
                <img src={Cataratas} alt="" />
            </li>
            <li>
                <input type="radio" id="sbutton3" name='sradio' />
                <label htmlFor="sbutton3"></label>
                <img src={BA} alt="" />
            </li>
            <li>
                <input type="radio" id="sbutton4" name='sradio' />
                <label htmlFor="sbutton4"></label>
                <img src={TF} alt="" />
            </li>
        </ul>
    </div>
  )
}

