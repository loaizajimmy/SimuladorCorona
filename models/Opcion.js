const Connection = require('../models/Connection');
/**
 * Clase que nos da el acceso a la tabla opcion
 * @type {module.Opcion}
 */
module.exports=class Opcion{
    constructor() {
        this.dataBase = new Connection();
        this.dataBase.connect();
        this.client = this.dataBase.connection;
    }
    /**
     * Retorna una opcion junto con las valores que tiene
     *
     * @param idOpcion un entero con el id de la opcion
     * @returns {JSON con la informacion de la opcion especifica}
     */
    async display(idOpcion){
        try{
            const patron = /\d+/g;
            if (!patron.test(idOpcion)) {
                return {
                    mensaje: 'la petición no es correcta ya que el parámetro no es del tipo correcto.'
                };
            }
            let query = `SELECT * FROM opcion WHERE idopcion=${idOpcion}`;
            const opcion = await this.client.query(query);
            if (opcion.rowCount === 0) {
                return {
                    mensaje: 'la opcion que se está buscando no se encuentra en la base de datos.'
                };
            }
            this.dataBase.disconnect();
            return opcion.rows;
        }
        catch (e){
            console.log('error en el metodo display de opcion');
            console.log(e);
        }

    }
};