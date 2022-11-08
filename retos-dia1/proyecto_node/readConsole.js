function readConsole(callback) {

    //importaciones de readline
    const readline = require('readline');
    const rl = readline.createInterface(process.stdin, process.stdout);
    const fs = require('fs');


    let obj = {};

    rl.question("¿Nombre?", (name) => {
        obj.name = name;


        rl.question("¿Apellidos?", (surname) => {
            obj.surname = surname;


            rl.question("¿Edad?", (age) => {
                obj.age = age;

                console.log("Todos los datos estan cumplimentados");
                rl.close();

                callback(obj)//Callback en el obejeto , se usa como funcion 


            });

        });

    });
    //fin readConsole
}

// readConsole(function (obj){
// });

// readConsole(console.log)


module.exports = { readConsole };