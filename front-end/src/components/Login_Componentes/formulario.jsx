import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styles/formulario.css";
import { useState } from 'react';
let API = "http://localhost:5000";
let mensaje = ""
export function Formulario() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const respuesta = await fetch(`${API}/inicio_sesion`,{
      method:["POST"],
      headers:{"Content-Type":"application/json"
    },
    body: JSON.stringify ({
      nombre,
      mail,
      contraseña
    })
    })
    
    const data = await respuesta.json();
    console.log(data)
    setUsername(data);
    console.log(data.sesion);
    if (data.sesion =="falso") {
      mensaje = data.mensaje;
      localStorage.setItem('sesion', "false");

      console.log(mensaje);
      

    }else{
      setUsername(data);
      console.log("mi nombre es:"+username) //depurador
      let usernameToJson = JSON.stringify(username)
      localStorage.setItem('sesion', "true");
      localStorage.setItem('nombre', usernameToJson );
      console.log(mensaje)
      
    }

  let sesion_storage = localStorage.getItem('sesion');
  console.log("sesion storege:" + sesion_storage );
  let nombre_storage = localStorage.getItem('nombre');

  } //Fin de handle submit
  
  
  
  console.log(API);
  console.log(username);
  return (
  
    <div id='padre_formulario'>'
    <div className="col-xl-6">
    <Form>
        <h1>Inicie sesion</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={(e)=>{setNombre(e.target.value)}} type="text" placeholder="Ingrese su nombre" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>{setMail(e.target.value)}} type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu mail con nadie mas
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Contraseña</Form.Label>
        <Form.Control onChange={(e)=>{setContraseña(e.target.value)}} type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="">
        Iniciar sesion
      </Button>
    </Form>
    </div>
 
  </div>

    
  );
}