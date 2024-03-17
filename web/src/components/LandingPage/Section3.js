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
              - {books.Title} -
            </p>
            <p className='section3Container_bookFile--bookAuthor'>
              {books.Author}
            </p>
            <p className='section3Container_bookFile--bookGendre'>
              {books.Gendre}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

export default Section3;
