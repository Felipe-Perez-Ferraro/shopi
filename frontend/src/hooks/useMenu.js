import { useState } from 'react';

export function useMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
  };

  return { toggleCart, toggleMenu, handleToggleCart, handleToggleMenu };
}
