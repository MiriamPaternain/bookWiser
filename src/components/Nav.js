import { TfiAlignCenter } from 'react-icons/tfi';
import { IoSearchSharp } from 'react-icons/io5';
import logo from '../img/bookWiserLogoPurple.png';
import { useState } from 'react';
import Menu from './Menu';
import { IoMdClose } from 'react-icons/io';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='nav'>
        <div className='navContainer'>
          <img src={logo} alt='' className='navContainer_logo' />
          <input
            type='text'
            placeholder='Buscar por Autor / Título '
            className='navContainer_input'
          />
          <button className='navContainer_btn' onClick={toggleMenu}>
            {menuOpen ? <IoMdClose /> : <TfiAlignCenter />}
          </button>
        </div>
        {menuOpen && <Menu onClose={toggleMenu} />}
        <div className='nav_search'>
          <input
            type='text'
            placeholder='Autor / Título '
            className='nav_search--input'
          />
          <button className='nav_search--icon'>
            <IoSearchSharp />
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
