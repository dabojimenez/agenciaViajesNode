import Sequelize from "sequelize";
import db from "../config/db.js";

// en el objeto tenemos que definir cada una de las tablas
export const Testimonial = db.define('testimoniales', {
    // el id no es necesario, ya que el ORM, lo da por implicito que existe
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.DATE
    },
});