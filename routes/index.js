// en este archvio colocaremos todo lo que este relacionado con las rutas
import express from "express";
import { paginaDetalleViaje, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from "../controllers/paginasController.js";


// Estamos obteniendo la msima instancia de expres pero extendemos su router
const router = express.Router();

// Peticion de los verbos GET, POST, DELETE, etc
// req => (request) es el request es lo que envio/petición en el vervo ya sea al dar click o enviar un formulario
// res => (response) es lo que me respondera
// Ahora de esta forma, le pasamos el controlador que se necesita para esta ruta
router.get('/', paginaInicio );

// diferentes paginas o rutas
router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
// para las url de forma dinamica, usarmeos el comodin que nos otroga express
// cargara un metodo del controlador y lo colocara en la url
router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimoniales);


export default router;