import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styles/formulario.css";
import { useState } from 'react';
let API = "http://localhost:3500";
export function Crear_cuenta() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const respuesta = await fetch(`${API}/Crear_cuenta`,{
      method:"POST",
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
  }

  return (
    <div id='padre_formulario'>'
    <div className="col-xl-6">
    <Form>
        <h1>Crea tu cuenta</h1>
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