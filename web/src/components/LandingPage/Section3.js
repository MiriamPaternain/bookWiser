import { useEffect, useState } from 'react';

import axios from 'axios';
import BookCard from '../BookCard';

function Section3({ searchItem }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(
          'https://bookwiser.onrender.com/api/books'
        );
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error al obtener los libros', error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <>
      <div className='section3Container'>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </>
  );
}

export default Section3;
