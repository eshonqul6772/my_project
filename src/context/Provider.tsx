import React, {createContext} from 'react';

// @ts-ignore
const Context = createContext();

interface IProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [state, setState] = React.useState(false);
  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export default Provider;
