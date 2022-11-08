let fs = require("fs")

function writeAndRead (path,obj) {
    fs.writeFile(path, JSON.stringify(obj), (error) => {
        fs.readFile(path , "utf-8", (any, obj) => {
            console.log(JSON.parse(obj));
        })
    })
}



writeAndRead("./miFichero.json", {calle: "Madrid", numero: 16})

module.exports = {writeAndRead};