import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [
      ...prev,
      {
        ...product,
        cartQuantity: 1,
      },
    ]);
  };

  const totalCart = cart.reduce(
    (acc, curr) => acc + curr.price * curr.cartQuantity,
    0
  );

  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item._id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const addQty = (product) => {
    const productIndex = cart.findIndex((item) => item._id === product._id);

    const newCart = [...cart];
    newCart[productIndex].cartQuantity += 1;
    setCart(newCart);
  };

  const subQty = (product) => {
    const productIndex = cart.findIndex((item) => item._id === product._id);

    const newCart = [...cart];
    newCart[productIndex].cartQuantity -= 1;
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalCart,
        deleteItem,
        clearCart,
        addQty,
        subQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
