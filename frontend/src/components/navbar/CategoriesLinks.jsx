import React, { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { chevronUp, chevronDown } from '../../utils/icons';
import { NavLink } from 'react-router-dom';

const CategoriesLinks = ({ handleToggleMenu }) => {
  const [showCategories, setShowCategories] = useState(false);
  const { uniqueCategories } = useProducts();

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <li
      className="w-full border-b border-black md:border-0 text-xl font-medium  transition ease md:w-auto md:text-second text-start pl-1 cursor-pointer"
      onClick={handleShowCategories}
    >
      <div className="flex justify-between items-center">
        <p>Shopping</p>
        <span className="md:hidden">
          {showCategories ? chevronUp : chevronDown}
        </span>
      </div>
      <div
        className={`${
          showCategories ? 'flex' : 'hidden'
        } flex-col gap-3 pl-5 pt-2 mb-2 md:absolute md:top-6 md:bg-green md:w-full md:left-0 md:p-3 md:rounded`}
      >
        <NavLink
          to="/shopping"
          className="text-sm md:hover:text-yellow md:text-end md:text-base"
          onClick={handleToggleMenu}
        >
          All Products
        </NavLink>
        {uniqueCategories &&
          uniqueCategories.map((category) => (
            <NavLink
              key={category}
              to={`/${category}`}
              className="text-sm md:hover:text-yellow md:text-end md:text-base"
              onClick={handleToggleMenu}
            >
              {category}
            </NavLink>
          ))}
      </div>
    </li>
  );
};

export default CategoriesLinks;
