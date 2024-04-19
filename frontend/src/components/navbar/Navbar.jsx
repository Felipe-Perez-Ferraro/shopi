import React from 'react';
import { Link } from 'react-router-dom';
import { cartIcon, menu } from '../../utils/icons';
import { useMenu } from '../../hooks/useMenu';
import Cart from '../cart/Cart';
import Menu from './Menu';
import { useCart } from '../../hooks/useCart';
import { useFilters } from '../../hooks/useFilters';

const Navbar = () => {
  const { toggleCart, toggleMenu, handleToggleCart, handleToggleMenu } =
    useMenu();
  const { cart } = useCart();
  const { clearFilters } = useFilters();

  return (
    <header className="bg-green relative">
      <nav className="flex justify-between items-center max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto h-16">
        <h1>
          <Link to="/" className="text-2xl text-primary" onClick={clearFilters}>
            Shopi
          </Link>
        </h1>
        <div className="flex items-center gap-10">
          <Menu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu} />
          <Cart toggleCart={toggleCart} handleToggleCart={handleToggleCart} />
          <div className="flex gap-5">
            <button
              type="button"
              onClick={handleToggleCart}
              className="text-xl text-primary cursor-pointer hover:text-black flex items-center gap-1"
            >
              {cart.length}
              {cartIcon}
            </button>
            <button
              type="button"
              onClick={handleToggleMenu}
              className="text-xl text-primary md:hidden hover:text-black"
            >
              {menu}
            </button>
          </div>
        </div>
        {toggleMenu && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-totalBlack opacity-50 z-10 md:bg-transparent lg:w-0 lg:h-0"
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
    </header>
  );
};

export default Navbar;
