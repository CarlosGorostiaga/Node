const objeto = {
    name: "Carlos",
    surname: "Gorostiaga",
    age: 26,
}

let fs = require("fs")
fs.writeFile("./ejercicio2.json", JSON.stringify(objeto), (error) => {
    fs.readFile("./ejercicio2.json", "utf-8", (err, objeto) => {
        console.log(JSON.parse(objeto));
    })
})