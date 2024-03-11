import logoLarge from '../img/bookWiserLogoPurpleLarge.png';

function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <img src={logoLarge} alt='' className='footerContainer_logo' />
        <ul className='footerContainer_list'>
          <li className='footerContainer_list--item'>Sobre bookWiser</li>
          <li className='footerContainer_list--item'>Mi cuenta</li>
          <li className='footerContainer_list--item'>Crear cuenta</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
