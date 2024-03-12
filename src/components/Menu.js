import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className='menuContainer'>
        <ul className='menuContainer_list'>
          <Link to='/' className='menuContainer_list--link'>
            | Principal
          </Link>
          <li>| Mi cuenta</li>
          <li>| Géneros: {/* -conectar a la API cuando esté lista */}</li>
          <ul className='menuContainer_list--genders'>
            <li>TODOS</li>

            <li>Romántica</li>
            <li>...</li>
          </ul>
          <li>| Añade un libro</li>
          <Link to='/about' className='menuContainer_list--link'>
            | Sobre bookWiser
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Menu;
