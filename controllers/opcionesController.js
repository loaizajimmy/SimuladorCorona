const Opcion = require('../models/Opcion');
/**
 * controlador encargado de comunicar con el modelo de opciones
 *
 */
module.exports={
    /**
     * Hace el llamado para mostrar una sola opcion regresa su informacion en JSON
     *
     * @param req -> objeto de la peticion
     * @param res -> objeto de la respuesta
     * @returns {Retorna la opcion con sus datos en formato JSON}
     */
  show: async (req,res)=>{
      const opcion=new Opcion();
      const idOpcion=req.params.idOpcion;
      let filas= await opcion.display(idOpcion);
      res.json(filas);
  }

};