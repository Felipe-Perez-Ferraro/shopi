import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useParams } from 'react-router-dom';
import Footer from '../home/Footer';
import Loading from '../slider/Loading';
import Filters from './Filters';
import { useFilters } from '../../hooks/useFilters';
import { useCart } from '../../hooks/useCart';
import ManageColumns from './ManageColumns';
import { useColumns } from '../../hooks/useColumns';
import CategoriesProducts from './CategoriesProducts';

const Categories = () => {
  const { products } = useProducts();
  const { category } = useParams();
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const { cart } = useCart();
  const { columns, handleColumns } = useColumns();

  const interestCategories = filteredProducts?.filter(
    (prod) => prod.category === category
  );

  return (
    <>
      <section
        className={`my-10 p-2 md:p-0 ${
          interestCategories?.length === 0 && 'h-screen'
        } 
        ${interestCategories?.length <= 2 && !columns && 'h-screen'}
        lg:flex lg:max-w-4xl xl:max-w-7xl lg:mx-auto xl:mx-auto lg:gap-4`}
      >
        <div
          className={`flex justify-between ${
            columns && 'max-w-xs'
          } mx-auto md:max-w-2xl lg:mx-0 xl:mx-0 gap-3 mb-6 lg:w-1/3`}
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
            {category}
          </h2>
          <h2 className="text-center">
            {interestCategories?.length === 0 &&
              "Sorry! We couldn't find any products."}
          </h2>
          <article
            className={`grid ${
              columns ? 'max-w-xs' : 'grid-cols-2'
            } gap-y-4 gap-x-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-4`}
          >
            {!interestCategories && <Loading />}
            {interestCategories &&
              interestCategories.map((product) => {
                const isProduct = cart.some((item) => item._id === product._id);
                return (
                  <CategoriesProducts product={product} isProduct={isProduct} columns={columns} />
                );
              })}
          </article>
        </div>
      </section>
      {products && <Footer />}
    </>
  );
};

export default Categories;
