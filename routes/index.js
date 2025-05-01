const express=require("express");
const route=express.Router();

/*
    if(req.validation==true){
        const path='/error';
    }else{
        const path='/';
    }
*/
route.get('/',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Bienvenido</h1>
            <p>La hora actual es: ${req.dateType}</p>
            <button type="button" value="Entrar" onclick="location.href='/error'">Entrar</button>
        </body>
        </html>
        `);
})
route.get('/error',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Bienvenido</h1>
            <p>La hora actual es: ${req.dateType}</p>
            <p>Aun no es la hora espera hasta las 20:00h</p>
            <button type="button" value="Entrar" onclick="location.href='/'">Salir</button>
        </body>
        </html>
        `);
})


route.use((req, res) => {
    res.status(404).json({error: "página no encontrada"})
  })

  module.exports=route;