const fs = require("fs/promises");//Importamos el fs/promises 

let obj = { name: "Carlos", usurname: "Gorostiaga", age: 26 }; // creamos el obejeto con sus datos 

fs.writeFile("persona.json", JSON.stringify(obj))//se guarda el objeto en JSON en formato string

    .then(() => {
        return fs.readFile("persona.json", "utf-8")//Devuelve la promesa y la lee 

    })
    .then(data => {
        console.log(JSON.parse(data));//coge el obejeto que esta en en string y lo vuelve a convertir en un obejeto
    })
    .catch(err => {//analiza el error de cualquiera de las llamadas asíncronas anteriores
        console.log(err);
    })