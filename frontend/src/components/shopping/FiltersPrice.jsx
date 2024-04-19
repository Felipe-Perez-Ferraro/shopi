import React, { useId } from 'react';
import { useFilters } from '../../hooks/useFilters';

const FiltersPrice = () => {
  const { filters, setFilters, maxPrice, clearFilters } = useFilters();
  const priceId = useId();
  const sortPriceId = useId();

  const handleChangePrice = (e) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: e.target.value,
    }));
  };

  const handleSortPrice = (e) => {
    setFilters((prev) => ({
      ...prev,
      sortPrice: e.target.value,
    }));
  };
  return (
    <div className="p-1 flex flex-col gap-5">
      <div className="flex gap-2 lg:flex-col lg:gap-1">
        <label htmlFor={priceId}>Select Price</label>
        <div className="flex items-center gap-1">
          <input
            type="range"
            name="price"
            id={priceId}
            min={0}
            max={Math.max(...maxPrice)}
            onChange={handleChangePrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
      </div>
      <div className="flex gap-2 items-center lg:flex-col lg:items-start">
        <label className="text-start" htmlFor={sortPriceId}>
          Sort Price by:
        </label>
        <select
          name="sortPrice"
          id={sortPriceId}
          onChange={handleSortPrice}
          value={filters.sortPrice}
          className="border outline-none"
        >
          <option value="">Default</option>
          <option value="asc">Cheaper - High</option>
          <option value="dec">High - Cheaper</option>
        </select>
      </div>
      <div>
        <button type="button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersPrice;
