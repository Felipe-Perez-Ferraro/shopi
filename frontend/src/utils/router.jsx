import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import Product from '../components/shopping/Product';
import Categories from '../components/shopping/Categories';

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
    path: '/product/:id',
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
  {
    path: '/:category',
    element: (
      <Layout>
        <Categories />
      </Layout>
    ),
  },
]);

export default router;
