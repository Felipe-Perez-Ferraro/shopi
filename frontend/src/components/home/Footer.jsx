import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green mt-32">
      <div className="h-36 flex items-center justify-between max-w-xs mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
        <h2 className="text-2xl font-semibold text-primary md:text-5xl">
          Shopi
        </h2>
        <div className="flex gap-4 md:gap-16 items-center">
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="font-semibold hover:text-second">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shopping" className="font-semibold hover:text-second">
                Shopping
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="font-semibold hover:text-second">cat</li>
            <li className="font-semibold hover:text-second">cat</li>
            <li className="font-semibold hover:text-second">cat</li>
            <li className="font-semibold hover:text-second">cat</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="font-semibold text-sm">©Felipe Perez Ferraro 2024. All rights reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
