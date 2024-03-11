import { TfiAlignCenter } from 'react-icons/tfi';
import { IoSearchSharp } from 'react-icons/io5';
import logo from '../img/bookWiserLogoPurple.png';

function Nav() {
  return (
    <>
      <div className='navContainer'>
        <img src={logo} alt='' className='navContainer_logo' />
        <input
          type='text'
          placeholder='Autor / Título '
          className='navContainer_input'
        />
        <button className='navContainer_btn'>
          <TfiAlignCenter />
        </button>
      </div>
    </>
  );
}

export default Nav;
