//CONFIGURAR SERVIDOR
//importar express
const express = require('express');
//importar cors
const cors = require('cors');

const { dbConnect } = require('./config/connection');

//importar mongoose
//en config -> connection.js

require('dotenv').config();

//CREAR SERVIDOR
const server = express();

//CONFIGURAR SERVIDOR
server.use(cors());
server.use(express.json({ limit: '100mb' }));

//establecer conexión con MongoDB

//habilitar puerto para escuchar servidor
const PORT = 4000;

dbConnect();

server.listen(PORT, () => {
  console.log('se ha conectado al puerto' + PORT);
});
