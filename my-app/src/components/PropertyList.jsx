import React, { useEffect, useState } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);

      const data = null;
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            try {
              const response = JSON.parse(this.responseText);
              // Assuming the response is an array of property objects
              const propertiesData = response.slice(0, 10); // Get the first 10 properties
              setProperties(propertiesData);
            } catch (error) {
              setError('Error parsing response');
            }
          } else {
            setError('Error fetching properties');
          }
          setLoading(false);
        }
      });

      xhr.open('GET', 'https://zillow-api19.p.rapidapi.com/?zpid=19435371');
      xhr.setRequestHeader('x-rapidapi-key', 'YOUR_RAPIDAPI_KEY'); // Replace with your actual API key
      xhr.setRequestHeader('x-rapidapi-host', 'zillow-api19.p.rapidapi.com');

      xhr.send(data);
    };

    fetchProperties();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="property-list">
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <div key={index} className="property-item">
            <h3>{property.address}</h3>
            <p>Price: ${property.price}</p>
            <a href={`http://www.zillow.com/homedetails/${property.zpid}`} target="_blank" rel="noopener noreferrer">
              View Property
            </a>
          </div>
        ))
      ) : (
        <div>No properties found</div>
      )}
    </div>
  );
};

export default PropertyList;
