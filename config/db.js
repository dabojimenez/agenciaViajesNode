import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// se debe pasar los siguiente svalores
/**
 * 1) Nombre d ela base de datos
 * 2) Nombre del usuario
 * 3) Password
 * 4) Objeto de configuraciones, como el host, el puerto, etc
 * 4.1) host: el host que estaremos usando
 * 4.2) port: el puerto que se esta usando en la base de datos
 * 4.3) dialect: el nombre del motor de la base de datos
 * 4.4) define: se colocara false
 * 4.5) pool: configuracipon de mysql
 * 4.5.1) max:
 * 4.5.1) min:
 * 4.5.1) acquire:
 * 4.5.1) idle:
 * 4.6) operaratorAliases:
 */
const db = new Sequelize(
    // Como ahora en nuestra variable de entorno  ya tenemos nuestra string de conexion, cambiamso el tipo de conexion

    // process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    // host: process.env.DB_HOST,
    // port: '3306',
    // dialect: 'mysql',

    // Cambiamos a la cadena de conexion
    process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    operatorAliases: false
});

export default db;