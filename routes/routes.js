let express = require('express');
let router = express.Router();
const preguntasController = require('../controllers/preguntasController');
const opcionesController=require('../controllers/opcionesController');


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/preguntas', preguntasController.index);
router.get('/preguntas/:idPregunta', preguntasController.show);


router.get('/opciones/:idOpcion', opcionesController.show);

router.get("/test", (req, res) => {
    res.send("Hola jimmy");
});


module.exports = router;
