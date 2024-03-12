import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import LandingPage from './LandingPage/LandingPage';
import About from './About';
import Account from './Account';
import AddBook from './AddBook';

function App() {
  return (
    <>
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
