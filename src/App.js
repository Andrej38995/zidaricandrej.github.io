import React from 'react';
// components
import Banner from './components/2_Banner';
import Header from './components/1_Header';
import Nav from './components/0_Nav';
import About from './components/3_About';
import Services from './components/4_Services';
// import Work from './components/Work';
import Contact from './components/5_Contact';

const App = () => {
  return (
    <div style={{background: "linear-gradient(to top, #1c1c30,#251d3f, #1a0d2e)"}}>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      {/* <Work /> */}
      <Contact />
      {/* <div className='h-[4000px]'></div>  */}
      {/* <div className='h-[4000px]'></div>  */}
      {/* Height of webpage */}
    </div>
  );
};

export default App;
