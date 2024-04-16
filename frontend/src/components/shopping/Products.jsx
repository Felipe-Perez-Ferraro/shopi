import { see, shopping } from '../../utils/icons';
import { Link } from 'react-router-dom';

const Products = ({ columns, product }) => {
  return (
    <div className="border border-black p-1 bg-second">
      <figure className={`w-full ${columns ? 'h-60' : 'h-36'}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full"
        />
      </figure>
      <div className="min-h-52 flex flex-col justify-between">
        <h4 className="text-sm text-start pt-2">{product.title}</h4>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-start">${product.price}</p>
            <p className="text-sm">qty: {product.quantity}</p>
          </div>
          <div className="flex justify-center gap-3 w-full">
            <Link
              to={`/shopping/product/${product._id}`}
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
        </div>
      </div>
    </div>
  );
};

export default Products;
