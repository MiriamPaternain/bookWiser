import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import LandingPage from './LandingPage/LandingPage';
import About from './About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
