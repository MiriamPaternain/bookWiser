function Menu() {
  return (
    <>
      <div className='menuContainer'>
        <ul className='menuContainer_list'>
          <li>| Mi cuenta</li>
          <li>| Géneros: {/* -conectar a la API cuando esté lista */}</li>
          <ul className='menuContainer_list--genders'>
            <li>TODOS</li>

            <li>Romántica</li>
            <li>...</li>
          </ul>
          <li>| Añade un libro</li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
