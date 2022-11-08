const readline = require('readline');

const fs = require('fs/promises');

//CONVERTIDOR DE PROMESAS
function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}


function readConsoleMethodThen(callback) {
    let obj = {};
    pregunta("¿Nombre?")

        .then((name) => {
            obj.name = name;
            return pregunta("¿Apellido?")
        })
        .then((surname) => {
            obj.surname = surname;
            return pregunta("¿Edad?")
        })
        .then((age) => {
            obj.age = age;
            return callback(obj);
        })
        .catch((err) => {
            console.log(err);
        })
}

// readConsoleMethodThen(console.log)

async function readConsoleMethodAsync(callback) {
    try {
        let obj = {};
        let pregunta1 = await pregunta("¿Nombre?")
        obj.name = pregunta1;
        let pregunta2 = await pregunta("Apellido?")
        obj.surname = pregunta2;
        let pregunta3 = await pregunta("¿edad?")
        obj.age = pregunta3;
        await callback(obj)
    } catch (err) {
        console.log(err);
    }
}

// readConsoleMethodAsync(console.log)

module.exports = { readConsoleMethodThen, readConsoleMethodAsync };
// module.exports = {readConsoleMethodAsync};