import React from 'react';
import { Link } from 'react-router-dom';
import { star, see, shopping } from '../../utils/icons';

const FeaturedProducts = (prod) => {
  return (
    <article className="border border-black p-3 flex flex-col gap-2">
      <figure className="flex items-center justify-center">
        <img src={prod.image} alt="" className="w-[300px] h-[250px]" />
      </figure>
      <h3 className="text-sm text-start">{prod.title}</h3>
      <p className="text-lg font-semibold text-start">${prod.price}</p>
      <div className="flex gap-1 items-center">
        <p className="text-yellow">{star}</p>
        <p>{prod.rating.rate}</p>
      </div>
      <div className="flex justify-center gap-3 w-full">
        <Link
          to={`/shopping/product/${prod._id}`}
          className="bg-third py-1 px-3 md:w-24 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-fourth"
        >
          {see}
        </Link>
        <button
          type="button"
          className="bg-green py-1 px-3 md:w-24 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-darkRed"
        >
          {shopping}
        </button>
      </div>
    </article>
  );
};

export default FeaturedProducts;
