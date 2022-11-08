const readline = require('readline');
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

async function asyncAwait() {
    try {
        let pregunta1 = await pregunta("Inserta el Nombre :");
        obj.name = pregunta1;

        let pregunta2 = await pregunta("inserta tu apellido :");
        obj.username = pregunta2;

        let pregunta3 = await pregunta("Inserte su edad :");
        obj.age = pregunta3;

        await fs.writeFile("reto3-b.json", JSON.stringify(obj));

        const guardBox = await fs.readFile("reto3-b.json", "utf8");

        console.log(JSON.parse(guardBox));



    } catch (error) {
        console.log(error);
    }
}
asyncAwait()