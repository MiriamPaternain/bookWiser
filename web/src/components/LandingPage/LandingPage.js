import Nav from '../Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from '../Footer';
import { useState } from 'react';

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const handleSearch = (query) => {
    console.log('Búsqueda realizada:', query);
    setSearchQuery(query);
  };
  return (
    <>
      <div className='langingPageContainer'>
        <Nav onSearch={handleSearch} />
        <Section1 />
        <Section2 />
        <Section3 searchItem={searchItem} />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
