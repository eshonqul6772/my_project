import React from 'react';

import Header from './components/Header';


import cls from './Main.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => (
  <div className={cls.wrapper}>
    <Header />
    <main className={cls.main}>{children}</main>
  </div>
);

export default Main;
