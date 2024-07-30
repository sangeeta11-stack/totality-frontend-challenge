
import React, { useState } from 'react';

import Filter from '../components/Filters';
import PropertyList from '../components/PropertyList';


const Home = () => {
  const [filters, setFilters] = useState({});

  const applyFilters = (filterValues) => {
    setFilters(filterValues);
    // Fetch or filter the properties based on the filters here
  };

  return (
    <div className="home-page">
      <Filter onFilter={applyFilters} />
      <PropertyList filters={filters} />
      <PropertyList />
    </div>
  );
};

export default Home;
