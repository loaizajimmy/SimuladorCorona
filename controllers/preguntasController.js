const Pregunta = require('../models/Pregunta');

/**
 * controlador encargado de comunicar con el modelo de preguntas
 *
 */
module.exports = {
    /**
     *  Hace el llamado a buscar todas las preguntas y los regresa en JSON
     *
     * @param req -> objeto de la peticion
     * @param res -> objeto de la respuesta
     * @returns {retorna todas preguntas de la base de datos}
     */
    index: async (req, res) => {
        const pregunta = new Pregunta();
        let filas = await pregunta.showAll();
        //console.log(filas);
        res.json(filas);
    },

    /**
     * Hace el llamado para mostrar una sola pregunta con sus opciones de respuesta y regresa su informacion en JSON
     *
     * @param req -> objeto de la peticion
     * @param res -> objeto de la respuesta
     * @returns {Retorna la pregunta con sus opciones de respuesta en formato JSON}
     */
    show: async (req, res) => {
        const pregunta = new Pregunta();
        const idPregunta = req.params.idPregunta;
        let filas = await pregunta.display(idPregunta);
        res.json(filas);
    }
};