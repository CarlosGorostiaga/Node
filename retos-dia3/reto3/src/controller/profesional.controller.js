const { Professional } = require("../claseProfesional");

let profesionales = [];
function getprofesional(request, res) {
    let name = request.query.id
    let respuesta;
    if (profesionales[name] != null) {
        respuesta = profesionales[name];
    } else
        respuesta = { erro: true, codigo: 200, mensaje: 'El profesional no existe' }
    res.send(respuesta);
}
function getProfesionales(request, res) {
    let respuesta = profesionales


    res.send(respuesta);
}
function postProfesional(request, res) {
    let newProfesional = new Professional ( 
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height,
        request.body.isRetired);
    let respuesta;
    console.log(request.body);
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
    let name = request.query.id
    let newProfesional = new Professional ( 
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height,
        request.body.isRetired);
    if (profesionales[name] != null) {
        profesionales[name]= newProfesional
        respuesta = { error: false, codigo: 200, mensaje: 'Profesional actualizado', resultado: newProfesional }
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'Profesional no existente', resultado: newProfesional};
    }
    res.send(respuesta);
}


// function putProfesional(request, res) {

//     let respuesta
//     let name = request.query.id

//     if (profesionales != null) {
//         profesionales.push(profesionales);

//         profesionales[name].name = request.body.name;
//         profesionales[name].age = request.body.age;
//         profesionales[name].weight = request.body.weight;
//         profesionales[name].height = request.body.height
//         respuesta = { error: false, codigo: 200, mensaje: "Profesional actualizado", resultado: profesionales[name] };
//     } else

//         respuesta = { error: true, codigo: 200, mensaje: "El Profesional no exixte", resultado: profesionales[name] };

//     res.send(respuesta);


// }


function deleteProfesional(request, res) {
    let respuesta;
    let name = request.query.id
    if (profesionales[name] != null) {
        profesionales[name] = null;
        respuesta = { error: false, codigo: 200, mensaje: 'Profesional borrado' };
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'Profesional no existe', resultado: profesionales[name] };
    }
    res.send(respuesta);
}
module.exports = { getprofesional, putProfesional, postProfesional, deleteProfesional, getProfesionales };