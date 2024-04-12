import { useEffect, useState } from 'react';
import axios from 'axios';

export function useProducts(id, category) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5555/products').then((res) => {
      setProducts(res.data.data);
      setLoading(false);
    });
  }, [category]);

  const ratedProducts = products?.sort((a, b) => {
    if (a.rating.rate > b.rating.rate) return -1;
    if (a.rating.rate < b.rating.rate) return 1;
    return 0;
  });

  const uniqueCategories = Array.from(
    new Set(products?.map((prod) => prod.category))
  );

  const product = products?.find((product) => product._id === id);

  return { products, product, ratedProducts, uniqueCategories, loading };
}
