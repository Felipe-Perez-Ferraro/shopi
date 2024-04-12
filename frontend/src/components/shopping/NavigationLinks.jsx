import React from 'react';
import { Link } from 'react-router-dom';
import { chevronRight } from '../../utils/icons';

const NavigationLinks = () => {
  return (
    <nav className="flex gap-2 items-center pt-1 pl-1">
      <Link to="/" className="text-xs hover:underline hover:underline-offset-2">
        Home {chevronRight}
      </Link>
      <Link to="/shopping" className="text-xs hover:underline hover:underline-offset-2">
        Shopping {chevronRight}
      </Link>
      <p className="text-sm text-blue">Product</p>
    </nav>
  );
};

export default NavigationLinks;
