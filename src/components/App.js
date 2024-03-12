import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import LandingPage from './LandingPage/LandingPage';
import About from './About';
import Account from './Account';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
