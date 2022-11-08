/* const frutas = ["Manzana", "Banana"]

export default frutas;
 */

import http from "http"
/* const http = require("http"); */

const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hola desde el servidor!</h1>");
});

server.listen(port, () => {
  console.log(`Servidor esta corriendo en el puerto ${port}`);
});

