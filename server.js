const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/"
});

app.use("/peerjs", peerServer);