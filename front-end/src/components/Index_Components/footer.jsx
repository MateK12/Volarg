import React from 'react';
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";
import insta from "../assets/img/instagram.png";
import tik from '../assets/img/tik-tok.png'
import "./styles/footer.css";
export function Footer() {
  return (
    <div id='contenedor_footer'>
      <br />
      
      <div  className='container'>
        <div className="row">
          <div className="col-xl-3">
            <a className='redes_sociales' href="#">
              <img className='redes_sociales' src={facebook} alt="" />
              <h5>Facebook</h5>
            </a>
          </div>
          <div className="col-xl-3">
            <a  className='redes_sociales' href="#">
              <img className='redes_sociales' src={insta} alt="" />
              <h5>Instagram</h5>
            </a>
          </div>
          <div className="col-xl-3">
            <a className='redes_sociales' href="#">
              <img className='redes_sociales' src={twitter} alt="" />
              <h5>Twitter</h5>
            </a>
          </div>
          <div className="col-xl-3">
            <a className='redes_sociales' href="#">
              <img className='redes_sociales' src={tik} alt="" />
              <h5>Tik-Tok</h5>
            </a>
          </div>
        </div>
          <h6 id='creador'>
          Creado por Mateo Kristich
          </h6>
      </div>
    </div>
  )
}

