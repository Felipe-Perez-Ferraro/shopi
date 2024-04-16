import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { uniqueCategories } = useProducts();
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="mt-32">
      <article className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h2 className="font-bold text-2xl mb-4">Categories</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {uniqueCategories.map((category, indx) => (
            <Link
              key={category}
              id={`category_${indx}`}
              to={`/${category}`}
              className="w-full flex items-center justify-center text-2xl font-bold rounded-xl transition ease shadow-md hover:scale-105 cursor-pointer h-[140px]"
              onClick={handleScrollTop}
            >
              {category}
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Categories;
