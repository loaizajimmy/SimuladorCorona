let contador = 5;
let preguntaActual = 1;

$(function () {
    $("#btnEnviar").on('click', siguientePregunta)
});

function getOpcionesPregunta(id) {
    $.ajax({
        url: `/preguntas/${id}`,
        method: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            if (data.hasOwnProperty('mensaje')) {
                siguientePregunta();
            }
            else {
                agregarPreguntaChat(data);
            }
        }
    });
}

function siguientePregunta() {
    getOpcionesPregunta(preguntaActual++);
}

function agregarPreguntaChat(data) {
    const codigo = '<tr>' +
        '<th>' +
        '<div class="talk-bubble tri-right round right-in absolute ">' +
        '<div class="text text-1">' +
        '<p>' + data.enunciado + '</p>' +
        '</div>' +
        '</div>' +
        '</th>' +
        '</tr>';
    let chat = $("#infochat");
    chat.append(codigo);
    agregarOpciones(data);
}

function agregarOpciones(data) {
    let codigo = '<tr>' +
        '<th>' +
        '<div class="talk-bubble2  round right-in absolute">' +
        '<div class="talktext">';

    let codigoOpciones = crearOpciones(data);
    console.log(codigoOpciones);
    if (codigoOpciones !== '') {
        codigo += '<div class="gallery_product col-lg-8 col-md-4 col-sm-4 col-xs-6 filter hdpe">';
        codigo += codigoOpciones;
        codigo += '</div></div></th></tr>';
        let chat = $("#infochat");
        chat.append(codigo);
    }
    delizarChat();
}

function crearOpciones(data) {
    let codigo = '';
    console.log(data);
    switch (data.tiporespuesta) {
        case "opcion":
            for (let opcion of data.opcionesRespuesta) {
                codigo += `<label>${opcion.enunciado}</label><input type="checkbox" value="${opcion.enunciado}">`;
            }
            break;
        case "insercion":
            codigo += `<input type="number" value="" placeholder="Escribe el dato">`;
            break;

        case "aclaracion":
        default:
            break;
    }
    return codigo;
}

function delizarChat() {
    let frame = $("#frame");
    frame.scrollTop(frame.scrollTop() + frame[0].scrollHeight);
}
