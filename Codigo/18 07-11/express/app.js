/* const express = require("express"); */
import express from "express" // importo o requiero expresss

const app = express(); //traigo todos los metodos de express
const port = 3000; // defino el puerto

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.get("/contacto", (req, res) => {
    res.send("esta en la pagina de contacto!");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
