import React, { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Link, useParams } from 'react-router-dom';
import { see, shopping, square, trashCan } from '../../utils/icons';
import Footer from '../home/Footer';
import Loading from '../slider/Loading';
import Filters from './Filters';
import { useFilters } from '../../hooks/useFilters';
import { useCart } from '../../hooks/useCart';

const Categories = () => {
  const { products } = useProducts();
  const { category } = useParams();
  const [columns, setColumns] = useState(false);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const { addToCart, cart, deleteItem } = useCart();

  const handleColumns = () => {
    setColumns(!columns);
  };

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
          <div className="flex items-center gap-4">
            <button
              type="button"
              disabled={columns}
              onClick={handleColumns}
              className={`text-2xl  ${
                columns ? 'text-yellow' : 'text-gray'
              } md:hidden`}
            >
              {square}
            </button>
            <button
              type="button"
              disabled={!columns}
              onClick={handleColumns}
              className={`text-2xl  ${
                columns ? 'text-gray' : 'text-yellow'
              } md:hidden`}
            >
              {square} {square}
            </button>
          </div>
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
                  <div
                    key={product._id}
                    className="border border-black p-1 bg-second"
                  >
                    <figure className={`w-full ${columns ? 'h-60' : 'h-36'}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full"
                        loading="lazy"
                      />
                    </figure>
                    <div className="min-h-52 flex flex-col justify-between">
                      <h4 className="text-sm text-start pt-2">
                        {product.title}
                      </h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-semibold text-start">
                            ${product.price}
                          </p>
                          <p className="text-sm">qty: {product.quantity}</p>
                        </div>
                        <div className="flex justify-center gap-3 w-full">
                          <Link
                            to={`/product/${product._id}`}
                            className="bg-third py-1 px-3 md:w-24 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-fourth"
                          >
                            {see}
                          </Link>
                          {isProduct ? (
                            <button
                              className="bg-darkRed py-1 px-3 md:w-24 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-fourth"
                              type="button"
                              onClick={() => deleteItem(product._id)}
                            >
                              {trashCan}
                            </button>
                          ) : (
                            <button
                              className="bg-green py-1 px-3 md:w-24 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-yellow"
                              type="button"
                              onClick={() => addToCart(product)}
                            >
                              {shopping}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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
