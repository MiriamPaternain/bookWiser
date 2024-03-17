import Footer from './Footer';
import Nav from './Nav';
import { CiBookmarkCheck } from 'react-icons/ci';

function About() {
  return (
    <>
      <Nav showNavSearch={false} />
      <div className='aboutContainer'>
        <div className='aboutContainer_wrap'>
          <p className='aboutContainer_text'>
            <CiBookmarkCheck /> bookWiser es un proyecto personal diseñado y
            desarrollado por Miriam Paternáin - www.miriampaternain.com
          </p>
          <p className='aboutContainer_text'>
            <CiBookmarkCheck />
            Diseñado con Adobe Illustrator y Figma, aplicando conocimientos de
            UX / UI.
          </p>{' '}
          <p className='aboutContainer_text'>
            <CiBookmarkCheck />
            Desarrollado con un ecosistema de datos MERN.
          </p>
          <p className='aboutContainer_text'>
            <CiBookmarkCheck />
            Mención a las imágenes usadas para este projecto:
          </p>
          <p className='aboutContainer_text--imgLink'>
            <a
              href='https://www.freepik.es/foto-gratis/arriba-libros-abiertos_2042397.htm#fromView=search&page=1&position=1&uuid=04121ccd-af29-498a-9323-6164201aab59'
              className='aboutContainer_text--imgLink'>
              Imagen de freepik
            </a>
          </p>
          <p className='aboutContainer_text--imgLink'>
            <a
              href='https://www.freepik.es/foto-gratis/arreglo-libros-antiguos-espacio-copia_13130601.htm#fromView=search&page=1&position=5&uuid=04121ccd-af29-498a-9323-6164201aab59'
              className='aboutContainer_text--imgLink'>
              Imagen de Freepik
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
