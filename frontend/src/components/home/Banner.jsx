import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="mt-20">
      <article className="max-w-xs mx-auto flex flex-col gap-2 border-2 border-black p-2 w-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h1 className="text-5xl font-bold text-center mb-2 md:text-7xl">
          Shopi.Clth
        </h1>
        <h2 className="text-lg text-center lg:text-xl">Your clothes shop!</h2>
        <p className="text-center lg:text-lg">
          Start buying right now the ultimate clothes merchandising in a
          friendly price.
        </p>
        <Link
          to="/shopping"
          className="border border-black bg-third text-center font-semibold mt-5 py-1 transition ease hover:bg-fourth"
        >
          Check our Products
        </Link>
      </article>
    </section>
  );
};

export default Banner;
