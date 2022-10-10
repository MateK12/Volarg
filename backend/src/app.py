from asyncio.windows_events import NULL
import json
from operator import mod
from pyexpat import model
from unicodedata import name
from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL
from email.policy import default
from enum import unique
import flask
import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, create_engine
from datetime import datetime
from sqlalchemy.orm import sessionmaker
from sqlalchemy import *
from flask_cors import CORS

base = declarative_base()           #Alchemy
motor = create_engine("mysql://root:@localhost/Volarg")  #Alchemy

class Usuarios(base):
    __tablename__ = "users"
    id = Column(Integer(), primary_key = True)
    nombre =  Column(String(50), nullable = False, unique = True)
    mail =  Column(String(50), nullable = False, unique = True)     #Base de usuarios
    contraseña =  Column(String(50), nullable = False, unique = False)
    def __str__(self):
        return self.nombre

sesion = sessionmaker(motor)                #Alchemy
sesion1 = sesion()              #Alchemy
app = Flask(__name__)       #Inicializamos Flask

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'               #Conecto Flask
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'base_sports'

mysql = MySQL(app)
CORS(app)
@app.route("/users", methods=["POST"])  #Crear un usuario
def createUser():
    print(request.json)
    sesion1.add(Usuarios(nombre = request.json["nombre"],mail = request.json["mail"], contraseña = request.json["contraseña"]))
    sesion1.commit()
    print("posta0")
    consulta_ruta1 = sesion1.query(Usuarios).filter(
        Usuarios.nombre == request.json["nombre"],
        Usuarios.mail == request.json["mail"]
    ).first()
    print("posta1")
    response = jsonify(str(consulta_ruta1.id))
    return response

@app.route("/inicio_sesion", methods=["GET","POST"])           #Iniciar sesion
def Inicio_sesion():
    consulta = sesion1.query(Usuarios).filter(
                Usuarios.mail == request.json["mail"]
            ).first()
    consulta1 = sesion1.query(Usuarios).filter(
                Usuarios.contraseña == request.json["contraseña"]
                ).first()

    if consulta != None and consulta1 !=None:
        response = jsonify(str(consulta.nombre))
        print(type(response))
       
        return response
    else:
        msg={"sesion":"falso",
        "mensaje":"Datos erroneos"
        }
        msg1 = jsonify(msg)
        return msg1
    

@app.route("/users/<id>", methods=["DELETE"])       #Borrar un usuario
def deleteUser(id):
    sesion1.query(Usuarios).filter(Usuarios.id==id).delete()
    sesion1.commit()
    return "recivido" 

@app.route("/users/<id>", methods=["PUT"])  #Actualizar un usuario
def updateUser(id):
    print(id)
    print(request.json)
    sesion1.query(Usuarios).filter(Usuarios.id==id).update({
        Usuarios.nombre:request.json["nombre"],
        Usuarios.mail:request.json["mail"],
        Usuarios.contraseña:request.json["contraseña"]
        })
    sesion1.commit()
    return "recivido" 




if __name__ == '__main__':
    # base.metadata.drop_all(motor)
    # base.metadata.create_all(motor)
    app.run(debug=True, port=5000)