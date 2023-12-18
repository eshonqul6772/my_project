import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import * as Layout from './layouts';

import About from './pages/About';
import Resume from './pages/Resume/';
import Services from './pages/Services/';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
  function log(text: string, color: string, fontSize: string): void {
    if (fontSize) {
      console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
    } else {
      console.log(`%c${text}`, `color: ${color}`);
    }
  }

  useEffect(() => {
    log('My Portfolio', 'red', '32px');
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout.Main>
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
    </Layout.Main>
  );
};

export default App;
