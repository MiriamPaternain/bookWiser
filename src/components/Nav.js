import { TfiAlignCenter } from 'react-icons/tfi';
import { IoSearchSharp } from 'react-icons/io5';
import logo from '../img/bookWiserLogoPurple.png';
import { useState } from 'react';
import Menu from './Menu';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='navContainer'>
        <img src={logo} alt='' className='navContainer_logo' />
        <input
          type='text'
          placeholder='Autor / Título '
          className='navContainer_input'
        />
        <button className='navContainer_btn' onClick={toggleMenu}>
          <TfiAlignCenter />
        </button>
      </div>
      {menuOpen && <Menu onClose={toggleMenu} />}
    </>
  );
}

export default Nav;
