$(function () {
    insertarPregunta(0);
    $("#sendMessage").click(function () {
        if (cont <= 1) {
            insertarPregunta(cont);
            cont++;
        }
        else {
            cont = 0;
        }
    });

    $("#sendGll").click(function () {
        insertarOpciones(cont);
    });
});
var cont = 0;
var respuestas1 = ["http://www.i-banos.com/Imagenes/bano-con-distribucion-feng-shui.jpg",
    "http://www.elmueble.com/medio/2016/05/06/cocina-blanca-con-suelo-de-barro_600x600_b79d0956.jpg"];

var respuestas2 = ["http://www.yoamorada.com/assets/img/errores-remodelar.jpg",
    "http://fotos.crminmobiliario.com/cliente/1027/fotosproductos/bano-recamara-principal-casa-sola-residencial-en-venta-en-hacienda-xcanatun-merida-35502.jpg"];

var preguntas = ["¿Está interesado en una en un baño o una cocina?",
    "¿Es para remodelar o está en obra negra?"];

function insertarPregunta(cont) {
    var text = preguntas[cont];
    var codigo = "";
    codigo =
        '<tr>' +
        '<th>' +
        '<div class="talk-bubble tri-right round right-in absolute ">' +
        '<div class="text text-1">' +
        '<p>' + text + '</p>' +
        '</div>' +
        '</div>' +
        '</th>' +
        '</tr>'
    $("#infochat").append(codigo);
}

function insertarOpciones(cont) {
    var img;
    if (cont == 1) {
        img = respuestas1;
    }
    else {
        img = respuestas2;
    }

    var codigo = "";
    codigo = '<tr>' +
        '<th>' +
        '<div class="talk-bubble2  round right-in absolute">' +
        '<div class="talktext">' +
        '<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">' +
        '<button type="button" class="btn btn-default botonimg">' +
        '<img src=' + img[0] + ' class="img-responsive">' +
        '</button>' +
        '</div>' +
        '<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">' +
        '<button type="button" class="btn btn-default botonimg">' +
        '<img src=' + img[1] + ' class="img-responsive">' +
        '</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</th>' +
        '</tr>'

    $("#infochat").append(codigo);

}