/**
 * Created by jimmyloaiza on 10/06/17.
 *
 * Este es el mdulo de la conexion a la base de datos
 *
 * EL metodo para conectarse debe ser llamado en el index del servidor (app.js) y en los modelos solo usar esa conexion
 */
const config = require('./Config');
const pg = require('pg');

module.exports = class Connection {
    constructor() {
        this.client = new pg.Client({
            host: config.DBHOST,
            user: config.DBUSER,
            password: config.DBPASSWORD,
            database: config.DBNAME,
            port: config.DBPORT

        });
    }

    /**
     * Devuelve el cliente que tiene la conexion a la Base de Datos
     * @return {pg.Client|*}
     */
    get connection() {
        return this.client;
    }

    /**
     * Hace la conexion del cliente con la base de datos
     */
    connect() {
        this.client.connect(function (err) {
            if (err) {
                console.log("No se pudo conectar a la base datos");
                console.log(err);
            }
            else {
                console.log('La conexion a la Base de Datos se hizo correctamente');
            }
        });
    }

    /**
     * Termina la conexion a la Base de Datos
     */
    disconnect() {
        this.client.end();
    }
};


