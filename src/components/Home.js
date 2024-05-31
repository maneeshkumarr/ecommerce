import React from 'react';
import Footer from "./Footer";
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import backgroundImage from './assets/images/background.jpg';


function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Apple Iphone",
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
      title: "Speaker ",
      description: "An affordable product with essential features for everyday use.",
      price: "₹499",
      brand: "Brand D"
    },
  ];

  return (
    <Container sx={{ 
      padding: 2 ,
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: 4,
      color:'white'
    }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          mb: 4,
          backgroundColor: 'black',
          padding: 4,
          borderRadius: 2,
          
          
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
          Welcome to Our E-commerce Store
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
          Discover amazing products and great deals!
        </Typography>
      </Box>

      {/* Promotional Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
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
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center' }}>
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {featuredProducts.map((product) => (
            <Grid item key={product.id}>
              <Card sx={{ maxWidth: 345 ,
                 backgroundColor: 'linear-gradient(to bottom, yellow, green) ',
                 backgroundRepeat: 'no-repeat',
                 padding: 4
              }}
              >
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
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
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
