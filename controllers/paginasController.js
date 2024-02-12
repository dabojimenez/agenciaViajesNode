
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

const paginaViajes = (req, res) => {
    // res.send('Contacto');
    res.render('viajes', {
        pagina: 'Viajes',
    });
}

const paginaTestimoniales = (req, res) => {
    // res.send('Contacto');
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}