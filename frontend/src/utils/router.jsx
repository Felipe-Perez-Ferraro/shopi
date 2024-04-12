import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import Product from '../components/shopping/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/shopping',
    element: (
      <Layout>
        <Shopping />
      </Layout>
    ),
  },
  {
    path: '/shopping/product/:id',
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
]);

export default router;
