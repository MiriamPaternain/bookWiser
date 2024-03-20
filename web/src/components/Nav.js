import { TfiAlignCenter } from 'react-icons/tfi';
import { IoSearchSharp } from 'react-icons/io5';
import logo from '../img/bookWiserLogoPurple.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from './Menu';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Nav({ showNavSearch = true, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${searchItem}`);
    }
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
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
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
              value={searchItem}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
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
