import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { NavbarProvider } from '../context/navbar';

const Layout = ({ children }) => {
  return (
    <NavbarProvider>
      <Navbar />
      {children}
    </NavbarProvider>
  );
};

export default Layout;
