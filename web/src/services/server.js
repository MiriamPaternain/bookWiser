const express = require('express');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 3000;
const mongoConnection = process.env.MONGO_CONNECTION;
// Conexión a la base de datos MongoDB
mongoose
  .connect(mongoConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch((err) => console.error('Error de conexión a MongoDB:', err));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  imageUrl: String,
});

const Book = mongoose.model('Book', bookSchema);

app.use(express.json());

// Ruta para agregar un libro
app.post('/api/books', async (req, res) => {
  try {
    const newBook = req.body;
    await Book.create(newBook);
    res.status(201).send('Libro añadido correctamente');
  } catch (error) {
    console.error('Error al añadir el libro:', error);
    res.status(500).send('Error interno del servidor');
  }
});

/* // Ruta para el formulario de registro de usuarios
app.post('/api/register', (req, res) => {
  // falta logica para registro de usuarios
});

// Ruta para guardar libros como favoritos (ejemplo)
app.post('/api/users/:userId/favorites', (req, res) => {
  // falta logica para guardar libros favoritos
});

// Ruta para obtener todos los libros
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}); */

// rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
