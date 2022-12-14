// const express = require('express');
// const cors = require('cors');
// const userRouters = require('./routers/profesional.routers');
// const {errorHandling} = require('./error/errorHandling');
// const app = express();
// app.set('port',process.env.PORT || 3000);
// app.use(cors());
// app.use(express.urlencoded({extended:false}));
// app.use(express.json());
// app.use(userRouters);
// app.use(function(req,res,next){
//     res.status(404).json({error:true,codigo:404,message:'Endpoint doesnt found'});
// });
// app.use(errorHandling);
// module.exports = app;


const express = require("express")
const cors = require("cors")
const userRouters = require("./routers/profesionales.routers")
const { errorHandling } = require("./error/errorHandling")

const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouters);
app.use(function (req, res, next) {
    res.status(404).json({
        error: true,
        codigo: 404,
        message: "Endponit doesnt found"
    })

})

app.use(errorHandling);

module.exports = app;