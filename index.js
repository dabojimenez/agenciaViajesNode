// archivo con el cual configuraremos els ervidor de express, que es como un apache/laragon, etc
// const express = require('express')
import  express  from "express";

const app = express();

// Definir puerto
// process.env.PORT = estas son variables de entorno y debe exitir en la parte de deployment, que por lo general node nos d auno
const port = process.env.PORT || 4000;

// Peticion de los verbos GET, POST, DELETE, etc
// req => (request) es el request es lo que envio/petición en el vervo ya sea al dar click o enviar un formulario
// res => (response) es lo que me respondera
app.get('/', (req, res) => {
    // colocar nuestra propia respuesta
    res.send('Hola mundo'); // metodo usado para mostrar algo en pantalla
    
    // res.json({
    //     id: 1
    // }) // mostramos un json

    // para mostrar una vista y muy usado
    // res.render();
});

// diferentes paginas o rutas
app.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

app.get('/contacto', (req, res) => {
    res.send('Contacto');
})

// si arranca correctamente, se moestrara el mensaje
// se coloca el puerto antes, para que funcione en el navegador
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});