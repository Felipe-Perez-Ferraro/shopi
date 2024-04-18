import React, { useEffect } from 'react';
import { xMark, trash } from '../../utils/icons';
import { useCart } from '../../hooks/useCart';

const Cart = ({ toggleCart, handleToggleCart }) => {
  const { cart, totalCart, deleteItem, clearCart, addQty, subQty } = useCart();

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
                <div className="p-1 flex flex-col gap-4">
                  <div className="flex gap-1">
                    <figure className="max-w-36 max-h-36">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full"
                      />
                    </figure>
                    <h3 className="text-sm font-semibold lg:text-base">
                      {product.title}
                    </h3>
                  </div>
                  <div className="flex justify-center gap-10 items-center">
                    <div className="flex justify-center gap-2 items-center">
                      <button
                        className="bg-second px-2 py-1 border border-black font-medium hover:bg-darkGray"
                        type="button"
                        onClick={() => addQty(product)}
                        disabled={product.cartQuantity === product.quantity}
                      >
                        +
                      </button>
                      <span>{product.cartQuantity}</span>
                      <button
                        className="bg-second px-2 py-1 border border-black font-medium hover:bg-darkGray"
                        type="button"
                        onClick={() => subQty(product)}
                        disabled={product.cartQuantity === 1}
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <p>${product.price * product.cartQuantity}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteItem(product._id)}
                      className="text-darkRed"
                    >
                      {trash}
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </div>
        <div className="flex flex-col p-1 gap-3">
          <div>
            <h3 className="font-bold text-black text-lg">
              Items: {cart.length}
            </h3>
            <h3 className="font-bold text-black text-xl">
              Total: ${totalCart}
            </h3>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button
              className="border w-24 py-2 font-semibold hover:bg-green hover:text-primary"
              type="button"
            >
              Buy
            </button>
            <button
              className="border w-24 py-2 font-semibold hover:bg-darkRed hover:text-primary"
              type="button"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Cart;
