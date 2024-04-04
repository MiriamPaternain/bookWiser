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
    console.log('Datos recibidos del frontend:', req.body);
    const newBook = new Book(req.body);
    await newBook.save();
    res
      .status(201)
      .json({ message: 'Libro añadido correctamente', book: newBook });
  } catch (error) {
    console.error('Error al añadir el libro:', error);
    res.status(500).json({ error: 'Ocurrió un error al añadir el libro' });
  }
});

server.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los libros' });
  }
});

server.get('/api/search', async (req, res) => {
  const { query, by } = req.query;

  try {
    let books;

    if (by === 'title') {
      books = await Book.find({ title: { $regex: new RegExp(query, 'i') } });
    } else if (by === 'author') {
      books = await Book.find({ author: { $regex: new RegExp(query, 'i') } });
    } else {
      // Si no se especifica "by" o es otro valor, buscar tanto por título como por autor
      books = await Book.find({
        $or: [
          { title: { $regex: new RegExp(query, 'i') } },
          { author: { $regex: new RegExp(query, 'i') } },
        ],
      });
    }

    res.status(200).json({ results: books });
  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
    res.status(500).json({ error: 'Ocurrió un error al realizar la búsqueda' });
  }
});

//habilitar puerto para escuchar servidor
const PORT = 4000;

dbConnect();

server.listen(PORT, () => {
  console.log('se ha conectado al puerto' + PORT);
});

server.use(express.static('./src/public'));
