var express = require("express");
var app = express();
// Esto responde con "mensaje" en la página de inicio
app.get("/", function (req, res) {
  console.log("Tengo una petición GET para la página de inicio");
  res.send("Hola GET");
});
// Esto responde a una petición POST para la página de inicio
app.post("/", function (req, res) {
  console.log("Recibí una solicitud POST para la página de inicio");
  res.send("Hola POST");
});
// Esto responde a una petición DELETE para la página /del_user.
app.delete("/del_user", function (req, res) {
  console.log("Tengo una petición DELETE para /del_user");
  res.send("Hola DELETE");
});
// Esto responde a una petición GET para la página /list_user.
app.get("/list_user", function (req, res) {
  console.log("Tengo una petición GET para /list_user");
  res.send("Listado de páginas");
});
// Esto responde a una petición GET para abcd, abxcd, ab123cd, etc.
app.get("/ab*cd", function (req, res) {
  console.log("Tengo una petición GET para /ab*cd");
  res.send("Coincidencia de patrón de página");
});
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Aplicación de ejemplo escuchando en http://%s:%s", host, port);
});
