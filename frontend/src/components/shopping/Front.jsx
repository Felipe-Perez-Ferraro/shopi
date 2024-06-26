import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import Products from './Products';
import Footer from '../home/Footer';
import Loading from '../slider/Loading';
import Filters from './Filters';
import { useFilters } from '../../hooks/useFilters';
import ManageColumns from './ManageColumns';
import { useColumns } from '../../hooks/useColumns';

const Front = () => {
  const { products } = useProducts();
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const { columns, handleColumns } = useColumns()

  return (
    <>
      <section className="my-10 p-2 md:p-0 lg:flex lg:max-w-4xl xl:max-w-7xl lg:mx-auto xl:mx-auto lg:gap-4">
        <div
          className={`flex justify-between ${
            columns && 'max-w-xs'
          } mx-auto md:max-w-2xl xl:mx-0 gap-3 mb-6 lg:w-1/3`}
        >
          <Filters />
          <ManageColumns columns={columns} handleColumns={handleColumns} />
        </div>
        <div className="xl:w-full">
          <h2
            className={`text-xl font-bold pb-2 ${
              columns ? 'max-w-xs' : ''
            } md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto`}
          >
            All Products
          </h2>
          <article
            className={`grid ${
              columns ? 'max-w-xs' : 'grid-cols-2'
            } gap-y-4 gap-x-2 md:max-w-2xl xl:max-w-5xl mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-4`}
          >
            {!filteredProducts && <Loading />}
            {filteredProducts &&
              filteredProducts.map((product) => (
                <Products
                  key={product._id}
                  columns={columns}
                  product={product}
                />
              ))}
          </article>
        </div>
      </section>
      {products && <Footer />}
    </>
  );
};

export default Front;
