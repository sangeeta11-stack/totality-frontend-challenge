// src/components/PropertyCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PropertyCard = ({ property }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://via.placeholder.com/150?text=${property.title}`}
        alt={property.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${property.price} / month
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.bedrooms} Bedrooms
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Amenities: {property.amenities.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
