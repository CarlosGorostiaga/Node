let objeto = {
    name: "",
    surname: "",
    age: [],
}


let readline = require('readline');

let rl = readline.createInterface(
    process.stdin, process.stdout);


let fs = require("fs")

rl.question('¿Cual es tu edad ?', (age) => {
    console.log('Tu edad es: ' + age);
    objeto.age = age;
    rl.question('¿Cual es tu apellido ?', (surname) => {
        console.log('Tu apellido es: ' + surname);
        objeto.surname = surname;
        rl.question('¿Cual es tu nombre ?', (name) => {
            console.log('Tu nombre es: ' + name);
            objeto.name = name;
            rl.close();
            fs.writeFile("./ejercicio3.json", JSON.stringify(objeto), (error) => {
                fs.readFile("./ejercicio3.json", "utf-8", (err, objeto) => {
                    console.log(JSON.parse(objeto));
                })


            })
        })
    })
})