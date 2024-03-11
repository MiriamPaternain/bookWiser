function Section2() {
  return (
    <>
      <div className='section2Container'>
        <p className='section2Container_join'>Únete a bookWiser:</p>
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
