// archivo con el cual configuraremos els ervidor de express, que es como un apache/laragon, etc
// const express = require('express')
import express from 'express';
import router from './routes/index.js';


const app = express();

// Definir puerto
// process.env.PORT = estas son variables de entorno y debe exitir en la parte de deployment, que por lo general node nos d auno
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Creacion propia de nuestro middelware
// Obtener el anio actual
// next => nos permite dirigir al siguiente middelware, y si no se lo coloca, no se ejecutara las siguientes lineas
app.use( (req, res, next) => {
    // con locals, es como una variable inetrna de express que podemos ir asignando mas varibales y son muy faciles de leer en la vista
    // res.locals.unaVariable = 'Nueva variable';

    const year = new Date();
    res.locals.actualYear = year.getFullYear();

    // le permitimos ir a la siguiente linea, cuando ya termino
    // si le colocamos un return, lo estariamos forrzando, esto en caso de que asi por si solo next() no funcione
    // return next();
    next();
});

// Definir la carpeta publica
app.use(express.static('public')); // agregaremos la carpeta publica como los archivos estaticos de express

// Agregamos el router
// use => soporta POST, GETL, PATCH, DELETE, etcy lo que hace es agregar a la pagina principal, las diferentes rutas que se van definiendo en router
app.use('/', router);

// si arranca correctamente, se moestrara el mensaje
// se agrega el puerto, para que funcione ene l navegador las diferentes rutas
app.listen(port, () => {

    console.log(`El servidor esta funcionando en el puerto ${port}`);
});