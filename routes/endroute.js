const express=require("express");
const endroute=express.Router();

endroute.get("/endroute",(req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Ruta Final</h1>
            <p>Bienvenido al final de la ruta</p>
        </body>
        </html>
        `);
})

endroute.use((req, res) => {
    res.status(404).json({error: "página no encontrada"})
  })

  module.exports=endroute;