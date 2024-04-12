import React, { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { square } from '../../utils/icons';
import Products from './Products';
import Footer from '../home/Footer';

const Front = () => {
  const { products } = useProducts();
  const [columns, setColumns] = useState(false);

  const handleColumns = () => {
    setColumns(!columns);
  };

  return (
    <>
      <section className="mt-10 p-2 md:p-0">
        <div className="flex justify-end gap-3 mb-6 md:hidden">
          <button
            type="button"
            disabled={columns}
            onClick={handleColumns}
            className={`text-2xl  ${columns ? 'text-yellow' : 'text-gray'}`}
          >
            {square}
          </button>
          <button
            type="button"
            disabled={!columns}
            onClick={handleColumns}
            className={`text-2xl  ${columns ? 'text-gray' : 'text-yellow'}`}
          >
            {square} {square}
          </button>
        </div>
        <h2 className="text-xl font-bold pb-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
          All Products
        </h2>
        <article
          className={`grid ${
            columns ? 'max-w-xs' : 'grid-cols-2'
          } gap-y-4 gap-x-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-4`}
        >
          {products &&
            products.map((product) => (
              <Products key={product._id} columns={columns} product={product} />
            ))}
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Front;
