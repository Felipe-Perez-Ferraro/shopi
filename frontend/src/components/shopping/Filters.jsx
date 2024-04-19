import React, { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { NavLink } from 'react-router-dom';
import { xMark } from '../../utils/icons';
import FiltersPrice from './FiltersPrice';

const Filters = () => {
  const [open, setOpen] = useState(false);
  const { uniqueCategories } = useProducts();

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (open) {
        e.preventDefault();
      }
    };

    if (open && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'visible';
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={handleOpenMenu}
        className="border p-1 lg:hidden"
      >
        Filters
      </button>
      <div
        className={`bg-primary h-screen absolute w-full top-0 left-0 z-20 ${
          open ? 'block' : 'hidden'
        } lg:block lg:z-0 lg:bg-transparent lg:relative`}
      >
        <button
          type="button"
          className="absolute top-0 right-1 text-xl lg:hidden"
          onClick={handleOpenMenu}
        >
          {xMark}
        </button>
        <h2 className="text-2xl w-full border-b mt-10">Price</h2>
        <FiltersPrice />
        <h2 className="text-2xl w-full border-b mt-8">Categories</h2>
        <ul className="flex flex-col gap-2 relative p-1">
          <li>
            <NavLink
              to={`/shopping`}
              className="text-xl"
              onClick={handleOpenMenu}
            >
              All Products
            </NavLink>
          </li>
          {uniqueCategories &&
            uniqueCategories.map((category) => (
              <li key={category}>
                <NavLink
                  to={`/${category}`}
                  className="text-xl"
                  onClick={handleOpenMenu}
                >
                  {category}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Filters;
