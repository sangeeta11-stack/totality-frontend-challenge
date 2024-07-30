// src/components/FilterSlab.js
import React, { useState } from 'react';
import './FilterSlab.css'; // Import the CSS file

const FilterSlab = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [bedrooms, setBedrooms] = useState(1);

  const handleFilter = () => {
    onFilter({ location, priceRange, bedrooms });
  };

  return (
    <div className="filter-slab">
      <h2>Filter Properties</h2>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label>Price Range:</label>
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        />
        -
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
        />
      </div>
      <div>
        <label>Bedrooms:</label>
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(+e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterSlab;
