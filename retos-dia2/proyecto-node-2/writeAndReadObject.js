const fs = require("fs/promises");

function writeAndRead1(path, obj) {
    fs.writeFile(path, JSON.stringify(obj))

        .then(() => {
            return fs.readFile(path, "utf-8")

        })
        .then(data => {
            console.log(JSON.parse(data));
        })
        .catch(err => {
            console.log(err);
        })

}
writeAndRead1("./miFichero.json", { calle: "Madrid", numero: 16 })



// ************************************************************



let obj = {
    nombre: "Carlos",
    apellido: "Gorostiaga"
}

function writeAndRead2(path, obj) {

    async function asyncAwait() {
        await fs.writeFile(path, JSON.stringify(obj))
        const guardBox = await fs.readFile(path, "utf8")
        console.log(JSON.parse(guardBox));

    }
    asyncAwait()

}

writeAndRead2("./miFichero-b.json", { calle: "Madrid", numero: 16 })

module.exports = { writeAndRead2 };

