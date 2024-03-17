import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className='menuContainer'>
        <ul className='menuContainer_list'>
          <Link to='/' className='menuContainer_list--link'>
            | Principal
          </Link>

          <Link to='/account' className='menuContainer_list--link'>
            | Mi cuenta
          </Link>

          <li>| Géneros: {/* -conectar a la API cuando esté lista */}</li>
          <ul className='menuContainer_list--genders'>
            <li>TODOS</li>

            <li>Romántica</li>
            <li>...</li>
          </ul>

          <Link to='/add-book' className='menuContainer_list--link'>
            | Añade un libro
          </Link>

          <Link to='/about' className='menuContainer_list--link'>
            | Sobre bookWiser
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Menu;
