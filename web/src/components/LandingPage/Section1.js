import { FiCheckSquare } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <>
      <div className='Section1Container'>
        <p className='Section1Container_text'>
          Bienvenido a bookWiser, tu lugar favorito donde encontrar los libros
          que te estaban buscando para ser leídos.
        </p>
        <ul className='Section1Container_list'>
          <li className='Section1Container_list--text'>
            Encuentra tus libros y archívalos en Leídos <FiCheckSquare /> o Para
            leer <FiHeart />
          </li>
          <li className='Section1Container_list--text'>
            ¿No lo encuentras? Súbelo tu mismo rellenando este{' '}
            <Link to='/add-book' className='Section1Container_list--textLink'>
              formulario.
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Section1;
