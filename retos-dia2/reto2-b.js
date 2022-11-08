const fs = require("fs/promises")

let obj ={
    nombre: "Carlos",
    apellido: "Gorostiaga"
}

async function asyncAwait() {
    await fs.writeFile("new.json", JSON.stringify(obj))
    const guardBox = await fs.readFile("new.json","utf8")
    console.log(JSON.parse(guardBox));
    
}

asyncAwait()