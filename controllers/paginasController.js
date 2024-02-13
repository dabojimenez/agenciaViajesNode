import { Testimonial } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";

const paginaInicio = async (req, res) => {
    
    //Creacion de un promise, apra cmabiar el enfoque de usar await, await, await de forma seguida en las lineas ocntinuas
    const promiseDB = [];
    
    promiseDB.push(Viaje.findAll({ limit: 3})); // consultar tres viajes del modelo viaje
    promiseDB.push(Testimonial.findAll({ limit: 3 })); // consultar tres viajes del modelo viaje
    
    try {
        // Promise.all => arrancara las consultas al mismo tiempo
        // obtendremos los valores de las consultas en promiseDB
        const resultado = await Promise.all( promiseDB );
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        }); // metodo usado para mostrar algo en pantalla
    } catch (error) {
        console.log(error);
    }

    // colocar nuestra propia respuesta
    // res.json({
    //     id: 1
    // }) // mostramos un json

    // para mostrar una vista y muy usado
    // res.render();
}

const paginaNosotros = (req, res) => {
    // res.send('Nosotros');
    // Pasar variables a la vista
    // const viajes = 'Viaje Alemania';
    res.render('nosotros', {
        pagina: 'Nosotros',
        // viajes, // usamos handlres para pasar viajes : viajes
    }); // render => ya espera el nombre d euna vista, en la carpeta de views
}

const paginaViajes = async (req, res) => {
    // Consultar Base de datos
    const viajes = await Viaje.findAll();
    // console.log(viajes);
    // res.send('Contacto');
    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    // res.send('Contacto');
    try {
        // Cosultamos los testimoniales existentes
        const testimoniales = await Testimonial.findAll();
        // console.log(testimoniales);
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,
        });
    } catch (error) {
        console.log(error);
    }
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    // req.params => se asocia mucho con el :slug que se coloco en la ruta
    // console.log(req.params.slug);
    const { slug } = req.params;

    try {
        // traemos un solo registro de la base de datos y con where le hacemos una condicion, indicandole la columna y el valor
        const resultado = await Viaje.findOne({
            where: {
                slug
            }
        })
        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}