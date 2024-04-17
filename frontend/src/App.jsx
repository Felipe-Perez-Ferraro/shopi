import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './utils/router';
import { CartProvider } from './context/cart';

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
