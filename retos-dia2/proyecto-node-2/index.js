const { readConsoleMethodThen } = require("./readConsole.js");
const { writeAndRead2 } = require("./writeAndReadObject.js");


readConsoleMethodThen(function (obj) {
    writeAndRead2("objeto.json", obj)
});
