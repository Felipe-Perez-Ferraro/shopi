import React from 'react';
import { useCart } from '../../hooks/useCart';

const HandleCart = ({ product }) => {
  const { cart, deleteItem, addToCart } = useCart();
  const isProduct = cart.some((item) => item._id === product._id);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {isProduct ? (
        <button
          className="bg-darkRed py-1 px-3 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-fourth"
          type="button"
          onClick={() => deleteItem(product._id)}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="bg-green py-1 px-3 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-yellow"
          type="button"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default HandleCart;
