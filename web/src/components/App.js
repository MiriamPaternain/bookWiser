import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import LandingPage from './LandingPage/LandingPage';
import About from './About';
import Account from './Account';
import AddBook from './AddBook';
import { useState } from 'react';
import Nav from './Nav';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    console.log('Búsqueda realizada:', query);
    setSearchQuery(query);
  };
  return (
    <>
      <Nav onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
        <Route path='/add-book' element={<AddBook />} />
      </Routes>
    </>
  );
}

export default App;
