import React, { useEffect } from 'react';
import { xMark } from '../../utils/icons';
import { useCart } from '../../hooks/useCart';
import CartItems from './CartItems';
import CartFeatures from './CartFeatures';

const Cart = ({ toggleCart, handleToggleCart }) => {
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = (e) => {
      if (toggleCart) {
        e.preventDefault();
      }
    };

    if (toggleCart) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'visible';
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleCart, cart]);

  return (
    <>
      <ul
        className={`fixed py-4 flex flex-col justify-between gap-6 right-0 top-0 z-20 w-3/4 border-r border-slate-950 bg-primary ${
          toggleCart ? 'block' : 'hidden'
        } overflow-y-auto h-screen md:w-[45%] lg:w-[35%] xl:w-[25%]`}
      >
        <li
          className="absolute top-0 left-1 text-xl cursor-pointer"
          onClick={handleToggleCart}
        >
          {xMark}
        </li>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Shopping Cart
          </h2>
          {cart &&
            cart.map((product) => (
              <li key={product._id} className="border-b">
                <CartItems product={product} />
              </li>
            ))}
        </div>
        <CartFeatures handleToggleCart={handleToggleCart} />
      </ul>
    </>
  );
};

export default Cart;
