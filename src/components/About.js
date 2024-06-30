import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';

function About() {
  return (
    <Container sx={{ padding: 4 }}>
      {/* About Us Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Welcome to our e-commerce store! We are dedicated to providing you with the best products and services.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our team works tirelessly to source high-quality items and ensure a seamless shopping experience for our customers.
        </Typography>
      </Box>

      {/* Mission and Values Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          To deliver exceptional value and quality through innovative products and excellent customer service.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
          Meet the Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                 Akshay Acharya
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  CEO & Founder
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Akshay has over 20 years of experience in the industry and is passionate about delivering the best products to our customers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
     Adarsh Gogate
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Chief Marketing Officer
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Adarsh Gogate leads our marketing team with innovative strategies to engage and grow our customer base.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Akshay hebbar
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Chief Technology Officer
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
              Hebbar oversees all technical aspects and ensures our platform is secure and user-friendly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Additional Information Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We are committed to providing an outstanding shopping experience with high-quality products, competitive prices, and exceptional customer service.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
