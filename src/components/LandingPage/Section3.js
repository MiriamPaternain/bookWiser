import { FiHeart } from 'react-icons/fi';
import { FiCheckSquare } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';

function Section3() {
  const books = [
    {
      index: 1,
      Title: 'Diferente',
      Author: 'Eloy Moreno',
      Gendre: 'Narrativa',
      Img: 'https://imagessl6.casadellibro.com/a/l/s5/56/9788466670456.webp',
    },
    {
      index: 2,
      Title: 'El circo de la noche',
      Author: 'Erin Morgenstern',
      Gendre: 'Fantasía',
      Img: 'https://imagessl6.casadellibro.com/a/l/s5/96/9788408111696.webp',
    },
    {
      index: 3,
      Title: 'Donde todo brilla',
      Author: 'Alice Kellen',
      Gendre: 'Romántica',
      Img: 'https://www.planetadelibros.com/usuaris/libros/thumbs/729d7a30-ffda-4234-b058-1ac781108b7a/d_295_510/portada_donde-todo-brilla_alice-kellen_202310231102.webp',
    },
  ];
  return (
    <>
      <div className='section3Container'>
        {books.map((books, index) => (
          <article key={index} className='section3Container_bookFile'>
            <img
              src={books.Img}
              alt=''
              className='section3Container_bookfile--img'
            />
            <span className='section3Container_bookfile--heart'>
              <FiHeart />
            </span>
            <span className='section3Container_bookfile--check'>
              <FiCheckSquare />
            </span>
            <div className='section3Container_bookfile--rate'>
              <p className='section3Container_bookfile--rateText'>Valorar:</p>
              <span className='section3Container_bookfile--rateStars'>
                <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
              </span>
            </div>
            <p className='section3Container_bookfile--bookTitle'>
              {books.Title}
            </p>
            <p className='section3Container_bookfile--bookAuthor'>
              {books.Author}
            </p>
            <p className='section3Container_bookfile--bookGendre'>
              {books.Gendre}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

export default Section3;
