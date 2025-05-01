const express=require("express");
const route=express.Router();
let path="/"


route.get('/',(req,res)=>{
    const condicion=req.validation;
    if(condicion==true){
        path='/endroute';
        console.log(path)
    }else{
        path='/error';
        console.log(path)
    }
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
            <button type="button" value="Entrar" onclick="location.href='${path}'">Entrar</button>
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

  module.exports=route;