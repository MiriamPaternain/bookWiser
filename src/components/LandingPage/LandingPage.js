import Nav from '../Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from '../Footer';

function LandingPage() {
  return (
    <>
      <div className='langingPageContainer'>
        <Nav />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
