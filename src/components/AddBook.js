import Footer from './Footer';
import Nav from './Nav';

function AddBook() {
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
        <form action='' className='addBookContainer_form'>
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='Título del libro'
          />
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='Autor/a'
          />
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='Género'
          />
          <input
            type='text'
            className='addBookContainer_form--input'
            placeholder='* Enlace de la imagen'
          />
          <p className='addBookContainer_form--imgLinkText'>
            * busca una imagen de la portada en google, copia el enlace y pégalo
            aquí.
          </p>
          <input
            type='submit'
            className='addBookContainer_form--submit'
            placeholder='Añadir libro'
          />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddBook;
