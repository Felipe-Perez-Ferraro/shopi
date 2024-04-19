import React from 'react';
import { useCart } from '../../hooks/useCart';
import Swal from 'sweetalert2';
import { useMenu } from '../../hooks/useMenu';

const CartFeatures = () => {
  const { cart, totalCart, clearCart } = useCart();
  const { handleToggleCart } = useMenu();

  const handleBuyItem = () => {
    Swal.fire({
      title: 'Payment Successfull',
      text: 'Thanks for buying at shopi',
      color: '#fff',
      icon: 'success',
      showConfirmButton: false,
      background: 'green',
    });
    clearCart();
    handleToggleCart();
  };

  return (
    <div className="flex flex-col p-1 gap-3">
      <div>
        <h3 className="font-bold text-black text-lg">Items: {cart.length}</h3>
        <h3 className="font-bold text-black text-xl">Total: ${totalCart}</h3>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button
          className="border w-24 py-2 font-semibold hover:bg-green hover:text-primary"
          type="button"
          onClick={handleBuyItem}
          disabled={cart.length === 0}
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
  );
};

export default CartFeatures;
