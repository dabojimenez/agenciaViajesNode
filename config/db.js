import Sequelize from "sequelize";

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
const db = new Sequelize('agenciaviajesnode', 'root', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
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