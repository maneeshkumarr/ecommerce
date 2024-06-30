import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import backgroundImage from './assets/images/background.jpg';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Apple iPhone",
      description: "This is a great product with excellent features and benefits.",
      price: "₹999",
      brand: "Brand A"
    },
    {
      id: 2,
      title: "Amazon Echo",
      description: "This is another great product that offers amazing value.",
      price: "₹1499",
      brand: "Brand B"
    },
    {
      id: 3,
      title: "Nothing",
      description: "A top-notch product with high-quality materials and performance.",
      price: "₹1999",
      brand: "Brand C"
    },
    {
      id: 4,
      title: "Speaker",
      description: "An affordable product with essential features for everyday use.",
      price: "₹499",
      brand: "Brand D"
    },
  ];

  return (
    <Container sx={{ 
      padding: 2,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      minHeight: '100vh', // Ensure the container covers the viewport height
    }}>
      {/* Hero Section */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 8, // Padding on the Y-axis
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
        borderRadius: 4,
        backdropFilter: 'blur(5px)', // Apply blur effect for better contrast
        }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome to Our E-commerce Store
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Discover amazing products and great deals!
        </Typography>
      </Box>

      {/* Promotional Section */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Big Summer Sale!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Save up to 50% on selected items.
        </Typography>
        <Typography variant="h6" component="div" color="primary" sx={{ fontWeight: 'bold' }}>
          Shop Now
        </Typography>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ pb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {featuredProducts.map((product) => (
            <Grid item key={product.id}>
              <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.8)', }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.brand}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Additional Section */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Why Shop With Us?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We offer the best products at the best prices. Enjoy fast shipping and excellent customer service.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
