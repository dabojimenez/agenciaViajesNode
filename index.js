// archivo con el cual configuraremos els ervidor de express, que es como un apache/laragon, etc
// const express = require('express')
import express from 'express';
import router from './routes/index.js';


const app = express();

// Definir puerto
// process.env.PORT = estas son variables de entorno y debe exitir en la parte de deployment, que por lo general node nos d auno
const port = process.env.PORT || 4000;

// Agregamos el router
// use => soporta POST, GETL, PATCH, DELETE, etcy lo que hace es agregar a la pagina principal, las diferentes rutas que se van definiendo en router
app.use('/', router);

// si arranca correctamente, se moestrara el mensaje
// se agrega el puerto, para que funcione ene l navegador las diferentes rutas
app.listen(port, () => {

    console.log(`El servidor esta funcionando en el puerto ${port}`);
});