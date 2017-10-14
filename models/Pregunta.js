const Connection = require('../models/Connection');
/**
 * Clase que nos da el acceso a la tabla Pregunta
 * @type {module.Pregunta}
 */

module.exports = class Pregunta {
    constructor() {
        this.dataBase = new Connection();
        this.dataBase.connect();
        this.client = this.dataBase.connection;
    }

    /**
     *  retorna todas las preguntas que se encuentren en la base de datos con us
     *  respectiva informacion
     *
     * @returns {JSON con la informacion de todas las preguntas}
     *
     *
     */
    async showAll() {
        try {
            const query = 'SELECT * FROM pregunta';
            const preguntas = await this.client.query(query);
            //console.log(res.rows);
            this.dataBase.disconnect();
            return preguntas.rows;
        }
        catch (e) {
            console.log('error en el metodo show All de pregunta');
            console.log(e);
        }
    }

    /**
     * Retorna una pregunta junto con las opciones de respuesta que tiene
     *
     * @param idPregunta un entero con el id de la pregunta
     * @returns {JSON con la informacion de la pregunta especifica}
     */
    async display(idPregunta) {
        try {
            const patron = /\d+/g;
            if (!patron.test(idPregunta)) {
                return {
                    mensaje: 'la petición no es correcta ya que el parámetro no es del tipo correcto.'
                };
            }
            let query = `SELECT * FROM pregunta WHERE idpregunta=${idPregunta}`;
            const pregunta = await this.client.query(query);
            if (pregunta.rowCount === 0) {
                return {
                    mensaje: 'la pregunta que se está buscando no se encuentra en la base de datos.'
                };
            }
            query = `SELECT  o.idopcion,o.enunciado,op.idsiguiente FROM opcionespregunta op, pregunta p,opcion o
                WHERE op.idpregunta=p.idpregunta AND op.idopcion=o.idopcion AND p.idpregunta=${idPregunta}`;
            const respuestas = await this.client.query(query);
            //console.log(res.rows);
            this.dataBase.disconnect();
            let respuestaJSON = pregunta.rows[0];
            respuestaJSON.opcionesRespuesta = respuestas.rows;
            return respuestaJSON;
        }
        catch (e) {
            console.log('error en el metodo display de pregunta');
            console.log(e);
        }
    }
};