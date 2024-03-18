import { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FiCheckSquare } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';
import axios from 'axios';

function Section3({ searchItem }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('http://localhost:4000/api/books');
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error al obtener los libros', error);
      }
    }
    fetchBooks();
  }, []);

  const filterBooks = (book) => {
    if (!book || !book.title || !book.author) {
      return false; // Retorna falso si book es undefined
    }

    const title = book.title ? book.title.toLowerCase() : '';
    const author = book.author ? book.author.toLowerCase() : '';

    return title.includes(searchItem) || author.includes(searchItem);
  };
  return (
    <>
      <div className='section3Container'>
        {books.filter(filterBooks).map((book, index) => (
          <article key={index} className='section3Container_bookFile'>
            <img
              src={book.imgUrl}
              alt=''
              className='section3Container_bookFile--img'
            />
            <span className='section3Container_bookFile--heart'>
              <FiHeart />
            </span>
            <span className='section3Container_bookFile--check'>
              <FiCheckSquare />
            </span>
            <div className='section3Container_bookFile--rate'>
              <p className='section3Container_bookFile--rateText'>Valorar:</p>
              <span className='section3Container_bookFile--rateStars'>
                <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
              </span>
              <p className='section3Container_bookFile--rateMean'>Media: --</p>
            </div>
            <p className='section3Container_bookFile--bookTitle'>
              {book.title}
            </p>
            <p className='section3Container_bookFile--bookAuthor'>
              {book.author}
            </p>
            <p className='section3Container_bookFile--bookGendre'>
              {book.gendre}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

export default Section3;
