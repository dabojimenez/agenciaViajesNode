// archivo con el cual configuraremos els ervidor de express, que es como un apache/laragon, etc
const express = require('express')

const app = express();

// Definir puerto
// process.env.PORT = estas son variables de entorno y debe exitir en la parte de deployment, que por lo general node nos d auno
const port = process.env.PORT || 4000;

// si arranca correctamente, se moestrara el mensaje 
app.listen( () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})