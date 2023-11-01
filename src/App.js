import React, { useEffect } from 'react';
// import favicon from './assets/favicon-chemistry.png';
import Header from './mainWebComponents/Header';
import Banner from './mainWebComponents/Banner';
import Nav from './mainWebComponents/Nav';
import About from './mainWebComponents/About';
import Services from './mainWebComponents/Services';
import Work from './mainWebComponents/Work';
import Contact from './mainWebComponents/Contact';
import atom_frame_0 from './assets/atom_favicon/atom_frame_0.png';
import atom_frame_1 from './assets/atom_favicon/atom_frame_1.png';
import atom_frame_2 from './assets/atom_favicon/atom_frame_2.png';
import atom_frame_3 from './assets/atom_favicon/atom_frame_3.png';
import atom_frame_4 from './assets/atom_favicon/atom_frame_4.png';
import atom_frame_5 from './assets/atom_favicon/atom_frame_5.png';
import atom_frame_6 from './assets/atom_favicon/atom_frame_6.png';
import atom_frame_7 from './assets/atom_favicon/atom_frame_7.png';
import atom_frame_8 from './assets/atom_favicon/atom_frame_8.png';
import atom_frame_9 from './assets/atom_favicon/atom_frame_9.png';


const App = () => {

  useEffect(() => {
    // For the fonts
    document.fonts.load('800 2em Rajdhani').then(function () {
      const titleElements = document.querySelectorAll('.au-title, .au-thin_title');
      titleElements.forEach(el => el.style.visibility = 'visible');
    });

    // For the favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);

    let counter = 0;
    const totalFrames = 10;
    const faviconVersions = [atom_frame_0, atom_frame_1, atom_frame_2, atom_frame_3, atom_frame_4, atom_frame_5, atom_frame_6, atom_frame_7, atom_frame_8, atom_frame_9];

    setInterval(() => {
      document.querySelector('link[rel="icon"]').href = faviconVersions[counter];
      counter = (counter + 1) % totalFrames;
    }, 300);

  }, []);

  return (
    <div style={{ background: "linear-gradient(to top, #1c1c30,#251d3f, #1a0d2e)" }}>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
