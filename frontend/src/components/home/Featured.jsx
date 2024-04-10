import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import Slider from 'react-slick';
import { useSlider } from '../slider/SliderFuncs';
import { products } from '../../mock/products.json';

const Featured = () => {
  const { settings } = useSlider();

  const ratedProducts = products.sort((a, b) => {
    if (a.rating.rate > b.rating.rate) return -1;
    if (a.rating.rate < b.rating.rate) return 1;
    return 0;
  });

  return (
    <main className="mt-32">
      <section className="relative max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h2 className="font-bold text-2xl">Featured Products</h2>
        <div>
          <Slider {...settings}>
            {ratedProducts.map(
              (prod) =>
                prod.rating.rate > 4 && (
                  <FeaturedProducts key={prod.id} {...prod} />
                )
            )}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Featured;
