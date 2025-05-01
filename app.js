//Inicialización de express -> npm install express -E

const express=require('express');
const app=express();

const PORT=3000;
const dateMiddleware=require("./middlewares/horaMiddleware");
const validatorMiddleware=require("./middlewares/validarHora");
const mainRout=require("./routes/index");
const finalRout=require("./routes/endroute");


app.use(dateMiddleware,validatorMiddleware);

app.use('/',mainRout);
app.use('/endroute',finalRout);


app.listen(PORT,()=>{
    console.log(`Escuchando por el puerto http://localhost:${PORT}`);
})