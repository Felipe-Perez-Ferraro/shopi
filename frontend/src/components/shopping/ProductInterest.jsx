import Slider from 'react-slick';
import { see, shopping } from '../../utils/icons';
import { Link } from 'react-router-dom';
import { useSlider } from '../slider/SliderFuncs';
import { useProducts } from '../../hooks/useProducts';

const ProductInterest = ({ id, product }) => {
  const { settings } = useSlider();
  const { products } = useProducts(id);
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const interestCategories = products?.filter(
    (prod) =>
      prod.category === product?.category && prod.title !== product?.title
  );

  return (
    <div className="mt-8 lg:mt-20">
      <h2 className="font-bold">You may have insterest in</h2>
      <Slider {...settings}>
        {interestCategories &&
          interestCategories.map((prod) => (
            <article
              key={prod._id}
              className="border border-black p-3 flex flex-col gap-2"
            >
              <figure className="flex items-center justify-center">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-[250px] h-[200px]"
                />
              </figure>
              <h3 className="text-sm text-start">{prod.title}</h3>
              <p className="text-lg font-semibold text-start">${prod.price}</p>
              <div className="flex justify-center gap-3 w-full">
                <Link
                  to={`/shopping/product/${prod._id}`}
                  className="bg-third py-1 px-3 md:w-24 text-center text-primary rounded-md text-xl cursor-pointer hover:bg-fourth"
                  onClick={handleScrollTop}
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
          ))}
      </Slider>
    </div>
  );
};

export default ProductInterest;
