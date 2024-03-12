import { Link } from 'react-router-dom';
import logoLarge from '../img/bookWiserLogoPurpleLarge.png';

function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <img src={logoLarge} alt='' className='footerContainer_logo' />
        <ul className='footerContainer_list'>
          <Link to='/about' className='footerContainer_list--item'>
            Sobre bookWiser
          </Link>
          <li className='footerContainer_list--item'>Mi cuenta</li>
          <li className='footerContainer_list--item'>Crear cuenta</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
