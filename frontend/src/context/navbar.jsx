import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <NavbarContext.Provider
      value={{ toggleMenu, toggleCart, setToggleMenu, setToggleCart }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
