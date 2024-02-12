// en este archvio colocaremos todo lo que este relacionado con las rutas
import express from "express";

// Estamos obteniendo la msima instancia de expres pero extendemos su router
const router = express.Router();

// Peticion de los verbos GET, POST, DELETE, etc
// req => (request) es el request es lo que envio/petición en el vervo ya sea al dar click o enviar un formulario
// res => (response) es lo que me respondera
router.get('/', (req, res) => {
    // colocar nuestra propia respuesta
    res.send('Hola mundo'); // metodo usado para mostrar algo en pantalla
    
    // res.json({
    //     id: 1
    // }) // mostramos un json

    // para mostrar una vista y muy usado
    // res.render();
});

// diferentes paginas o rutas
router.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

router.get('/contacto', (req, res) => {
    res.send('Contacto');
});

export default router;