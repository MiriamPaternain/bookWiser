import { TfiAlignCenter } from 'react-icons/tfi';
import { IoSearchSharp } from 'react-icons/io5';
import logo from '../img/bookWiserLogoPurple.png';
import { useState } from 'react';
import Menu from './Menu';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Nav({ showNavSearch = true, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <div className='nav'>
        <div className='navContainer'>
          <Link to='/'>
            <img src={logo} alt='' className='navContainer_logo' />
          </Link>
          {showNavSearch && (
            <input
              type='text'
              placeholder='Buscar por Autor / Título '
              className='navContainer_input'
              value={searchItem}
              onChange={handleSearch}
            />
          )}
          <button className='navContainer_btn' onClick={toggleMenu}>
            {menuOpen ? <IoMdClose /> : <TfiAlignCenter />}
          </button>
        </div>
        {menuOpen && <Menu onClose={toggleMenu} />}
        {showNavSearch && (
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
        )}
      </div>
    </>
  );
}

export default Nav;
