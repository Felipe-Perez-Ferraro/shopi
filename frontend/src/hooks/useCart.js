import { useContext } from 'react';
import { CartContext } from '../context/cart';

export function useCart() {
  const cart = useContext(CartContext);

  return cart;
}
