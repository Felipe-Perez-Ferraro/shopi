import FeaturedProducts from './FeaturedProducts';
import Slider from 'react-slick';
import { useSlider } from '../slider/SliderFuncs';
import { spinner } from '../../utils/icons';
import { useProducts } from '../../hooks/useProducts';

const Featured = () => {
  const { settings } = useSlider();
  const { ratedProducts, loading } = useProducts();

  return (
    <main className="mt-32">
      <section className="relative max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h2 className="font-bold text-2xl">Featured Products</h2>
        {loading ? (
          <article className="flex justify-center pt-10">
            <div className="bg-gray py-8 px-14 rounded-md flex flex-col gap-4">
              <svg className="animate-spin text-primary" viewBox="0 0 24 24">
                {spinner}
              </svg>
              <p className="text-primary text-xl font-bold">Loading</p>
            </div>
          </article>
        ) : (
          <div>
            <Slider {...settings}>
              {ratedProducts.map(
                (prod) =>
                  prod.rating.rate > 4 && (
                    <FeaturedProducts key={prod._id} {...prod} />
                  )
              )}
            </Slider>
          </div>
        )}
      </section>
    </main>
  );
};

export default Featured;
