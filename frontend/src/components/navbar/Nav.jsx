import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { cart, menu, xMark } from '../../utils/icons';
import CategoriesLinks from './CategoriesLinks';
import { useMenu } from '../../hooks/useMenu';

export const Nav = () => {
  const { toggleCart, toggleMenu, handleToggleCart, handleToggleMenu } =
    useMenu();
  return (
    <nav className="flex justify-between items-center max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto h-16">
      <h1>
        <Link to="/" className="text-2xl text-primary">
          Shopi
        </Link>
      </h1>
      <ul
        className={`fixed flex flex-col gap-3 left-0 top-0 z-20 w-3/4 border-r border-slate-950 h-screen bg-primary ${
          toggleMenu ? 'block' : 'hidden'
        } md:flex md:relative md:h-0 md:flex-row md:items-center md:gap-3 md:justify-end`}
      >
        <li>
          <button
            type="button"
            onClick={handleToggleMenu}
            className="absolute right-1 top-0 w-full text-end text-2xl md:hidden"
          >
            {xMark}
          </button>
        </li>
        <li className="mt-8 w-full border-b border-black md:mt-0 md:border-0 md:w-auto md:text-second">
          <NavLink
            className="text-xl font-medium hover:text-yellow transition ease"
            to="/"
            onClick={handleToggleMenu}
          >
            Home
          </NavLink>
        </li>
        <CategoriesLinks handleToggleMenu={handleToggleMenu} />
      </ul>
      <div className="flex gap-5">
        <button
          type="button"
          onClick={handleToggleCart}
          className="text-xl text-primary cursor-pointer hover:text-black"
        >
          {cart}
        </button>
        <button
          type="button"
          onClick={handleToggleMenu}
          className="text-xl text-primary md:hidden hover:text-black"
        >
          {menu}
        </button>
      </div>
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
    </nav>
  );
};
