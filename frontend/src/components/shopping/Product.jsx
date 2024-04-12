import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import NavigationLinks from './NavigationLinks';
import Footer from '../home/Footer';
import ProductInterest from './ProductInterest';
import HandleCart from './HandleCart';

const Product = () => {
  const { id } = useParams();
  const { product } = useProducts(id);

  return (
    <section id="productSection" className="h-calc">
      <NavigationLinks />
      {product ? (
        <article className="flex flex-col gap-2 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl pt-5">
          <h2 className="font-bold lg:text-lg">{product.title}</h2>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
            <figure className="flex justify-center lg:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="h-[400px] w-full"
              />
            </figure>
            <div className="lg:w-1/2 pt-4">
              <p className="text-sm text-justify mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray text-sm font-semibold">Price</p>
                  <span className="text-lg">${product.price}</span>
                </div>
                <p className="font-semibold">Quantity: {product.quantity}</p>
              </div>
              <HandleCart />
            </div>
          </div>
          <ProductInterest id={id} product={product} />
        </article>
      ) : (
        <p>Producto no encontrado</p>
      )}
      <Footer />
    </section>
  );
};

export default Product;
