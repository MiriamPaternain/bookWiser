import { FiHeart } from 'react-icons/fi';
import { FiCheckSquare } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';

function BookCard({ book }) {
  return (
    <>
      <article className='section3Container_bookFile'>
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
        <p className='section3Container_bookFile--bookTitle'>{book.title}</p>
        <p className='section3Container_bookFile--bookAuthor'>{book.author}</p>
        <p className='section3Container_bookFile--bookGendre'>{book.gendre}</p>
      </article>
    </>
  );
}

export default BookCard;
