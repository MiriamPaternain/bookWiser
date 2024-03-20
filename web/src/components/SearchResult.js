import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard';

function SearchResult() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/search?query=${query}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error al obtener los resultados de la búsqueda', error);
      }
    }
    fetchSearchResults();
  }, [query]);

  return (
    <>
      <div className='section3Container'>
        <h2>Resultados de la búsqueda para "{query}"</h2>
        {searchResults.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </>
  );
}

export default SearchResult;
