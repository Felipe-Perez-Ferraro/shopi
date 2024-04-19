import React from 'react';
import { xMark } from '../../utils/icons';
import { NavLink } from 'react-router-dom';
import CategoriesLinks from './CategoriesLinks';
import { useFilters } from '../../hooks/useFilters';
import { useMenu } from '../../hooks/useMenu';

const Menu = () => {
  const { toggleMenu, handleToggleMenu } = useMenu()
  const { clearFilters } = useFilters();
  return (
    <ul
      className={`fixed flex flex-col gap-3 left-0 top-0 z-20 w-3/4 border-r border-slate-950 h-screen bg-primary ${
        toggleMenu ? 'block' : 'hidden'
      } md:z-0 md:flex md:border-none md:bg-transparent md:relative md:h-auto md:w-full md:flex-row md:items-center md:gap-3 md:justify-end`}
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
      <li className="mt-8 w-full border-b border-black md:mt-0 md:border-0 md:w-auto md:text-second pl-1">
        <NavLink
          className="text-xl font-medium hover:text-black transition ease"
          to="/"
          onClick={() => {
            clearFilters();
            handleToggleMenu();
          }}
        >
          Home
        </NavLink>
      </li>
      <CategoriesLinks />
    </ul>
  );
};

export default Menu;
