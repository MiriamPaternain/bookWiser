//CONFIGURAR SERVIDOR
//importar express
const express = require('express');
//importar cors
const cors = require('cors');
const Book = require('./models/Book');
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
//rutas solicitudes
server.post('/api/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json({ message: 'Libro añadido correctamente' });
  } catch (error) {
    console.error('Error al añadir el libro:', error);
    res.status(500).json({ error: 'Ocurrió un error al añadir el libro' });
  }
});
//habilitar puerto para escuchar servidor
const PORT = 4000;

dbConnect();

server.listen(PORT, () => {
  console.log('se ha conectado al puerto' + PORT);
});
