import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
    // colocar nuestra propia respuesta
    res.render('inicio', {
        pagina: 'Inicio'
    }); // metodo usado para mostrar algo en pantalla
    
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

const paginaTestimoniales = (req, res) => {
    // res.send('Contacto');
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    });
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    // req.params => se asocia mucho con el :slug que se coloco en la ruta
    // console.log(req.params.slug);
    const { slug } = req.params;

    try {
        // traemos un solo registro de la base de datos y con where le hacemos una condicion, indicandole la columna y el valor
        const resultado = await Viaje.findOne({ where: {
            slug
        }})
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