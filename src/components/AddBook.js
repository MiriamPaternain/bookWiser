import Footer from './Footer';
import Nav from './Nav';
import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/books', bookData);

      setBookData({
        title: '',
        author: '',
        genre: '',
        imageUrl: '',
      });

      alert('Libro añadido correctamente');
    } catch (error) {
      console.error('Error al añadir el libro:', error);
      alert(
        'Ocurrió un error al añadir el libro. Por favor, intenta de nuevo más tarde'
      );
    }
  };
  return (
    <>
      <Nav showNavSearch={false} />
      <div className='addBookContainer'>
        <div className='addBookContainer_textContainer'>
          <p className='addBookContainer_texteContainer--text'>
            Rellena el siguiente formulario para añadir un libro a la base de
            datos. Por favor, añade los datos de forma correcta para que todos
            los usuarios puedan hacer uso de ellos.
          </p>
          <p className='addBookContainer_texteContainer--text'>
            ¡Muchas gracias por contribuir en este proyecto!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='addBookContainer_form'
          action='/api/books'>
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='Título del libro'
            name='title'
            value={bookData.title}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='Autor/a'
            name='author'
            value={bookData.author}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='Género'
            name='genre'
            value={bookData.genre}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='* Enlace de la imagen'
            name='imageUrl'
            value={bookData.imageUrl}
            onChange={handleChange}
            required
          />
          <p className='addBookContainer_form--imgLinkText'>
            * busca una imagen de la portada en google, copia el enlace y pégalo
            aquí.
          </p>
          <input
            type='submit'
            className='addBookContainer_form--submit'
            value='Añadir libro'
          />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddBook;
