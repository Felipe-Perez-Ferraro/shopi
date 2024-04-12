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
      className="w-full border-b border-black md:border-0 text-xl font-medium md:hover:text-yellow transition ease md:w-auto md:text-second text-start"
      onClick={handleShowCategories}
    >
      <div className="flex justify-between items-center">
        <p>Shopping</p>
        {showCategories ? chevronUp : chevronDown}
      </div>
      <div
        className={`${
          showCategories ? 'flex' : 'hidden'
        } flex-col gap-3 pl-5 pt-2 mb-2`}
      >
        <NavLink to="/shopping" className="text-sm" onClick={handleToggleMenu}>
          All Products
        </NavLink>
        {uniqueCategories &&
          uniqueCategories.map((category) => (
            <NavLink
              key={category}
              to={`/shopping/${category}`}
              className="text-sm"
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
