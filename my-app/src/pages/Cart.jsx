// src/pages/Cart.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Button, Card, CardContent, CardActions } from '@mui/material';

const initialCart = [
  { id: 1, title: 'Cozy Apartment', location: 'New York', price: 1500, bookingDates: '2024-08-01 to 2024-08-10' },
  { id: 2, title: 'Modern House', location: 'San Francisco', price: 3000, bookingDates: '2024-08-15 to 2024-08-20' },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleRemove = (id) => {
    setCart(cart.filter(property => property.id !== id));
  };

  const totalCost = cart.reduce((sum, property) => sum + property.price, 0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>My Cart</Typography>
      <Grid container spacing={3}>
        {cart.map(property => (
          <Grid item xs={12} key={property.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{property.title}</Typography>
                <Typography color="textSecondary">{property.location}</Typography>
                <Typography color="textSecondary">{property.bookingDates}</Typography>
                <Typography variant="h6">${property.price}</Typography>
              </CardContent>
              <CardActions>
                <Button color="secondary" onClick={() => handleRemove(property.id)}>Remove</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Total Cost: ${totalCost}
      </Typography>
    </Container>
  );
};

export default Cart;
