import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import 'aos/dist/aos.css';

import * as Layout from './layouts';

import routes from './routes';

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
    <BrowserRouter>
      <Layout.Main>
        <Routes>
          {routes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </Layout.Main>
    </BrowserRouter>
  );
};

export default App;
