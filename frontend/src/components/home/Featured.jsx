import FeaturedProducts from './FeaturedProducts';
import Slider from 'react-slick';
import { useSlider } from '../slider/SliderFuncs';
import { useProducts } from '../../hooks/useProducts';
import Loading from '../slider/Loading';

const Featured = () => {
  const { settings } = useSlider();
  const { ratedProducts, loading } = useProducts();

  return (
    <main className="mt-32">
      <section className="relative max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h2 className="font-bold text-2xl">Featured Products</h2>
        {loading ? (
          <Loading />
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
