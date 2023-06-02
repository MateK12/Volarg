const express = require('express')
const cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');
const {ObjectId} = require('mongodb');
const mongoose = require('mongoose');
const MONGO_HOST="localhost";
const MONGO_PUERTO="27017";
const MONGO_URI="mongodb://"+MONGO_HOST+":"+MONGO_PUERTO+"/";
const Schema = mongoose.Schema;

// mongoose.connect(MONGO_URI, { useUnifiedTopology: true })       //promesa para conectar a compass
//     .then(() => { console.log('Connected to MongoDB: %s \n ', MONGO_URI) }) //si sale bien
//     .catch((err) => { console.log('MongoDB connection error: %s \n', err); }) //si sale mal

const client = new MongoClient(MONGO_URI) //me conecto con URI
const dbname = "prueba"
const coll = "Coleccion"
let coleccion = client.db(dbname).collection(coll) //creo el db.coll
let objeto = {
    "titulo":"el principito",
    "descripcion":"elefante en un gorro"
}

// async function main(){
//     let insertar = await  coleccion.insertOne(objeto) //inserto un documento
//     console.log(insertar)
//     let leer = await coleccion.findOne({"_id": new ObjectId("6459747ad1f78d866b617708")})
//     console.log(leer)
//     coleccion.close
// }
// main()

// client.close //cierro conexion

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(
    express.json({
        type:"*/*"
    })
)
app.use(cors())

async function Insertar_usuario(usuario) {
    let insertar_usuario = await coleccion.insertOne(usuario);
    
}
const UserSchema = new Schema({
    nombre:{type:String,unique:true},
    mail:{type:String, unique:true},
    password:{type:String, unique:true}
})
const user_model = mongoose.model('userSchema',UserSchema);
app.post('/Iniciar_Sesion',async(req,res)=>{
    const {nombre, mail, contraseña} = req.body;
    let usuario_existe = await coleccion.findOne({$and:[{nombre:nombre},{mail:mail},{password:contraseña}]})
    if (usuario_existe == null){
        res.send({
            "mensaje":"credenciales erroneas"
        })
    }else{
        res.send(usuario_existe);
    }

})
app.post('/Crear_cuenta',async(req,res)=>{  //si hago CRUD tienen que ser asincronas
    let cuerpo_post = req.body; //ES el body que envio usuario
    let respuesta = {
        "prueba":"funcional"
    }
    const {nombre, mail, contraseña} = req.body;
    let usuario_existe = await coleccion.findOne({$or:[{nombre:nombre},{mail:mail}]});  //si encuentr
    if (usuario_existe == null) {
        const usuario = new user_model();
        usuario.nombre = nombre;
        usuario.mail = mail;
        usuario.password = contraseña;
        await usuario;
        let insertar_usuario = await coleccion.insertOne(usuario);
        coleccion.close;
        let vari = {"hola":"mundo"};
        res.send(vari);
    }else{
        res.send({
            "mensaje":"esta cuenta ya existe"
        });
    }
    
})

app.listen(3500,()=>{
    console.log("server corriendo en el puerto 3500");
})