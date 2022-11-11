const { Professional } = require("../claseProfessional");

let profesional = null;

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: "Punto de Inicio" };
    response.send(respuesta);

}

// *********************************************

function getProfessional(request, response) {
    let respuesta;
    if (profesional != null)
        respuesta = profesional;

    else
        respuesta = { error: true, codigo: 200, mensaje: "El usuario no exixte" }

    response.send(respuesta);

}

// *********************************************

function postProfessional(request, response) {

    let respuesta;
    console.log(request.body);
    if (profesional === null) {

        profesional = new Professional(
            request.body.name,
            request.body.age,
            request.body.weight,
            request.body.height,)

        respuesta = { error: false, codigo: 200, mensaje: "Usuario Creado", resultado: profesional };


    } else respuesta = { error: true, codigo: 200, mensaje: "Usuario ya existe", resultado: null };

    response.send(respuesta);

}

// ************************************************

function putProfessional(request, response) {

    let respuesta
    if (profesional != null) {

        profesional.name = request.body.name;
        profesional.age = request.body.age;
        profesional.weight = request.body.weight;
        profesional.height = request.body.height
        respuesta = { error: false, codigo: 200, mensaje: "Usuario actualizado", resultado: profesional };
    } else

        respuesta = { error: true, codigo: 200, mensaje: "El usuario no exixte", resultado: profesional };

    response.send(respuesta);


}

// ***********************************************

function deleteProfessional(request, response) {

    let respuesta

    if (profesional != null) {

        profesional = null;
        respuesta = { error: false, codigo: 200, mensaje: "El usuario no existe", resultado: profesional }

    } else
        respuesta = { error: true, codigo: 200, mensaje: "El usuario no existe", resultado: profesional }

    response.send(respuesta);

}

module.exports = { getStart, getProfessional, postProfessional, putProfessional, deleteProfessional };