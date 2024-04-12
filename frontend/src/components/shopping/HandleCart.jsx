import React, { useState } from 'react';

const HandleCart = () => {
  const [qtyCount, setQtyCount] = useState(0);

  const handleAddQty = () => {
    setQtyCount((prev) => prev + 1);
  };

  const handleSubQty = () => {
    setQtyCount((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        type="button"
        className="bg-fourth border border-black px-3 py-1 text-primary font-semibold hover:bg-darkRed"
      >
        Add to cart
      </button>
      <div className="flex gap-2 items-center">
        <button
          type="button"
          onClick={handleAddQty}
          className="bg-second px-2 py-1 border border-black font-medium hover:bg-darkGray"
        >
          +
        </button>
        <p>{qtyCount}</p>
        <button
          type="button"
          onClick={handleSubQty}
          disabled={qtyCount === 0}
          className="bg-second px-2 py-1 border border-black font-medium hover:bg-darkGray"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default HandleCart;
