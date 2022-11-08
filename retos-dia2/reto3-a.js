const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs/promises');



let obj = { name: "", username: "", age: [] };

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    })
    return question;
}



pregunta("¿cual es tu nombre?")

    .then((name) => {
        obj.name = name;
        // console.log("tu nombre es: " + name);
        return pregunta("¿Cual es tu apellido?")
    })
    .then((username) => {
        obj.username = username;
        // console.log("Tu Apellido es : " + username);
        return pregunta("¿Cual es tu edad ?")
    })

    .then((age) => {
        obj.age = age;
        // console.log("Tu edad es : " + age);
        return fs.writeFile("./reto3-a.json", JSON.stringify(obj))
    })

    .then(() => {
        return fs.readFile("./reto3-a.json", "utf-8")

    })
    .then((data) => {
        console.log(JSON.parse(data))

    })
    .catch((err) => {
        console.log(err);
    })
