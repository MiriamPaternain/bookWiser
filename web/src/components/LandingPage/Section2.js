import { useEffect, useState } from 'react';

function Section2() {
  const [typedText, setTypedText] = useState('');
  const text = 'Únete a bookWiser:';
  const typingSpeed = 250;
  const pauseAfterComplete = 1500;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          currentIndex = 0;
          const loopInterval = setInterval(() => {
            setTypedText((prevTypedText) => {
              if (currentIndex >= text.length) {
                clearInterval(loopInterval);
                return prevTypedText;
              } else {
                currentIndex++;
                return text.substring(0, currentIndex);
              }
            });
          }, typingSpeed);
        }, pauseAfterComplete);
      } else {
        setTypedText((prevTypedText) => {
          currentIndex++;
          return text.substring(0, currentIndex);
        });
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <div className='section2Container'>
        <p className='section2Container_join'>{typedText}</p>
        <div className='section2Container_account'>
          <input
            type='text'
            className='section2Container_account--input'
            placeholder='nombre de usuario'
          />
          <input
            type='text'
            className='section2Container_account--input'
            placeholder='Contraseña'
          />
        </div>
        <button className='section2Container_btn'>Crear cuenta</button>
        <p className='section2Container_logIn'>
          ¿Ya tienes cuenta?{' '}
          <a href='' className='section2Container_logIn--link'>
            Log in
          </a>
        </p>
      </div>
    </>
  );
}

export default Section2;
