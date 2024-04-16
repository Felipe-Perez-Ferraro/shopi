import React, { useEffect, useId, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useFilters } from '../../hooks/useFilters';
import { NavLink } from 'react-router-dom';
import { xMark } from '../../utils/icons';

const Filters = () => {
  const [open, setOpen] = useState(false);
  const { uniqueCategories } = useProducts();
  const { filters, setFilters, maxPrice, clearFilters } = useFilters();
  const priceId = useId();
  const sortPriceId = useId();

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  const handleChangePrice = (e) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: e.target.value,
    }));
  };

  const handleSortPrice = (e) => {
    setFilters((prev) => ({
      ...prev,
      sortPrice: e.target.value,
    }));
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
        <div className="p-1 flex flex-col gap-5">
          <div className="flex gap-2 lg:flex-col lg:gap-1">
            <label htmlFor={priceId}>Select Price</label>
            <div className="flex items-center gap-1">
              <input
                type="range"
                name="price"
                id={priceId}
                min={0}
                max={Math.max(...maxPrice)}
                onChange={handleChangePrice}
                value={filters.minPrice}
              />
              <span>${filters.minPrice}</span>
            </div>
          </div>
          <div className="flex gap-2 items-center lg:flex-col lg:items-start">
            <label className="text-start" htmlFor={sortPriceId}>
              Sort Price by:
            </label>
            <select
              name="sortPrice"
              id={sortPriceId}
              onChange={handleSortPrice}
              value={filters.sortPrice}
              className="border outline-none"
            >
              <option value="">Default</option>
              <option value="asc">Cheaper - High</option>
              <option value="dec">High - Cheaper</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </div>
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
