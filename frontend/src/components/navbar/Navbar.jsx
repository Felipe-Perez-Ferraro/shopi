import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import { Nav } from './Nav';

const Navbar = () => {
  const { toggleCart, toggleMenu, handleToggleCart, handleToggleMenu } =
    useMenu();

  return (
    <header className="bg-green relative">
      <Nav
        toggleCart={toggleCart}
        toggleMenu={toggleMenu}
        handleToggleCart={handleToggleCart}
        handleToggleMenu={handleToggleMenu}
      />
      {toggleMenu && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-totalBlack opacity-50 z-10 md:bg-transparent"
          onClick={handleToggleMenu}
        ></div>
      )}
      {toggleCart && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-totalBlack opacity-50 z-10"
          onClick={handleToggleCart}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
