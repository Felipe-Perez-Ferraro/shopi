import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
import { useProducts } from './useProducts';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  const { products } = useProducts();

  const filterProducts = (products) => {
    if (products) {
      let filtered = products;

      filtered = filtered.filter((prod) => prod.price >= filters.minPrice);

      if (filters.category !== 'all') {
        filtered = filtered.filter(
          (prod) => prod.category === filters.category
        );
      }

      if (filters.sortPrice === 'asc') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      }

      if (filters.sortPrice === 'dec') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    }
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      minPrice: 0,
      sortPrice: '',
    });
  }

  const maxPrice = Array.from(new Set(products?.map((prod) => prod.price)));

  return { filters, filterProducts, setFilters, maxPrice, clearFilters };
}
