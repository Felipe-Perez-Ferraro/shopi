import React from 'react';
import { useProducts } from '../../hooks/useProducts';

const Categories = () => {
  const { uniqueCategories } = useProducts();

  return (
    <section className="mt-32">
      <article className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h2 className="font-bold text-2xl mb-4">Categories</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {uniqueCategories.map((category, indx) => (
            <div
              key={category}
              id={`category_${indx}`}
              className="flex items-center justify-center rounded-xl h-[140px] transition ease shadow-md hover:scale-105 cursor-pointer"
            >
              <h3 className="text-2xl font-bold">{category}</h3>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Categories;
