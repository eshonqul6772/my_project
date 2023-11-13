import React from 'react';

import cls from './Container.module.scss';

interface IChildren {
  children: React.ReactNode;
}

const Container: React.FC<IChildren> = ({ children }) => (
  <div className={cls.container}>{children}</div>
);

export default Container;
