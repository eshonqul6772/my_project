import React from 'react';

import * as Layout from './layouts';

import About from './pages/About';
import Resume from './pages/Resume/';
import Services from './pages/Services/';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout.Main>
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
    </Layout.Main>
  );
}

export default App;
