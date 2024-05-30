import React from 'react';
import { Container, Box, Typography, Paper, Avatar, Grid } from '@mui/material';

export default function AboutPage() {
    return (
        <Container maxWidth="md" sx={{ }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Avatar 
                        alt="Business Promotion Platform Logo" 
                        src="/assets/images/avater.png" 
                        sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="h3" component="h1" gutterBottom>
                        About Our Business Promotion Platform
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        The perfect solution for promoting and marketing your business.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Our Mission
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At our business promotion platform, our mission is to simplify the process of promoting and marketing products and services for businesses. We strive to provide a seamless and efficient platform that empowers businesses of all sizes.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        What We Offer
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our platform offers a wide range of features designed to meet the needs of any business:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1" component="span">
                                Easy and secure online ticket purchasing.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" component="span">
                                Real-time event updates and notifications.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" component="span">
                                Comprehensive event management tools for organizers.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" component="span">
                                Detailed analytics and reporting.
                            </Typography>
                        </li>
                    </ul>
                </Box>
                <Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Our Story
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Founded in 2021, our platform was born out of a passion for helping businesses promote their products and services. Since then, we have assisted hundreds of businesses in successfully marketing and promoting their offerings.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Meet the Team
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Avatar 
                                    alt="Founder Name" 
                                    src="/assets/images/CEO-Sheldon.jpg" 
                                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                                />
                                <Typography variant="h6">
                                Sheldon Cooper
                                </Typography>
                                <Typography variant="body2">
                                    CEO & Founder
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Avatar 
                                    alt="Team Member Name" 
                                    src="/assets/images/Chief-Leonard.jpg" 
                                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                                />
                                <Typography variant="h6">
                                Leonard Hofstadter
                                </Typography>
                                <Typography variant="body2">
                                    Chief Technical Officer
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Add more team members as needed */}
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}
