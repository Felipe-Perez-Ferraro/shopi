import React from 'react';
import { trash } from '../../utils/icons';
import { useCart } from '../../hooks/useCart';

const CartItems = ({ product }) => {
  const { deleteItem, addQty, subQty } = useCart();
  return (
    <div className="p-1 flex flex-col gap-4">
      {product && (
        <>
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
        </>
      )}
    </div>
  );
};

export default CartItems;
