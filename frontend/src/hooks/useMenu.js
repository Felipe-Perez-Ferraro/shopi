import { useContext } from 'react';
import { NavbarContext } from '../context/navbar';

export function useMenu() {
  const { toggleMenu, toggleCart, setToggleMenu, setToggleCart } =
    useContext(NavbarContext);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
  };

  return { toggleCart, toggleMenu, handleToggleCart, handleToggleMenu };
}
