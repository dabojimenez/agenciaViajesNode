import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    // req.body => sera lo que el usuario coloque en el formulario
    // console.log(req.body);

    // validar los datos del formulario
    // podriamos usar express validator, para poder apoyarnos , esta es una dependencia
    const { nombre, correo, mensaje } = req.body;

    // arreglo de errores, para poder mosrar en la vista
    const errores = [];

    if (nombre.trim() === '') {
        errores.push({mensaje: 'El nombre es requerido'});
    }

    if (correo.trim() === '') {
        errores.push({mensaje: 'El correo es requerido'});
    }

    if (mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje es requerido'});
    }

    if (errores.length > 0) {
        // mostramos la vista con errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        });
    }else{
        // almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            // redirigimos al usuario, para que no este cargando la pagina
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}