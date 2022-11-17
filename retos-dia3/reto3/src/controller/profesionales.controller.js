const { Professional } = require("../claseProfesional");

let profesionales = [];


function getProfesionales(request, res) {
    let id = request.query.id
    let respuesta;

    if (id != null && id != "") {
        respuesta = { erro: true, codigo: 200, mensaje: 'profesional encontrado', respuesta: [profesionales[id]] }

    } else {
        respuesta = { erro: true, codigo: 200, mensaje: 'profesional encontrado', respuesta: profesionales }
    }

    res.send(respuesta);
}
// function getProfesionales(request, res) {
//     let respuesta = profesionales
//     if(profesionales != null ){
//         respuesta = {error : false , codigo : 200 , resultado : profesionales}

//     }else {
//         respuesta = { error : true , codigo : 200 , resultado : null}
//     }

//     res.send(respuesta);
// }
function postProfesionales(request, res) {
    let newProfesional = new Professional(
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height,);
    let respuesta;
    console.log(newProfesional);

    if (newProfesional !== null) {
        profesionales.push(newProfesional);
        respuesta = { error: false, codigo: 200, mensaje: 'Profesional creado', resultado: newProfesional };
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'Profesional ya existente', resultado: null };
    }
    res.send(respuesta);
}

function putProfesional(request, res) {
    let respuesta;
    let id = request.body.id

    if (profesionales[id] != null) {
        profesionales[id].name = request.body.name
        profesionales[id].age = request.body.age
        profesionales[id].weight = request.body.weight
        profesionales[id].height = request.body.height

        respuesta = { error: false, codigo: 200, mensaje: 'Profesional actualizado', resultado: profesionales[id] }
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'Profesional no existente' };
    }
    res.send(respuesta);
}





function deleteProfesional(request, res) {
    let respuesta;
    let id = request.body.id
    if (profesionales[id] != null) {
        profesionales.splice(id, 1)
        respuesta = { error: false, codigo: 200, mensaje: 'Profesional borrado' };
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'Profesional no existe' };
    }
    res.send(respuesta);
}
module.exports = { getProfesionales, putProfesional, postProfesionales, deleteProfesional };