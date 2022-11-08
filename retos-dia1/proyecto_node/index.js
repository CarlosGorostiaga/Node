const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");


function callAllFunction(path, obj, callback) {
    writeAndRead(path, obj);
    readConsole(callback);
}

callAllFunction("objeto.json", {}, console.log);