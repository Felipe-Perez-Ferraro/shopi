import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';

const Footer = () => {
  const { uniqueCategories } = useProducts();
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-green">
      <div className="h-auto w-full flex items-center justify-between py-10 max-w-xs mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-5xl gap-4">
        <h2 className="text-2xl font-semibold text-primary md:text-5xl">
          Shopi
        </h2>
        <div className="flex gap-3 md:gap-6 items-center">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                onClick={handleScrollTop}
                className="font-semibold hover:text-second"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shopping"
                onClick={handleScrollTop}
                className="font-semibold hover:text-second"
              >
                Shopping
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="flex flex-col gap-1">
              {uniqueCategories &&
                uniqueCategories.map((category) => (
                  <Link
                    key={category}
                    to={`/${category}`}
                    onClick={handleScrollTop}
                    className="hover:text-second text-sm text-start"
                  >
                    {category}
                  </Link>
                ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="font-semibold text-sm">
          ©Felipe Perez Ferraro 2024. All rights reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
