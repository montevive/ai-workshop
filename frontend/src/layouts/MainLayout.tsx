import React from 'react';
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Time Bank Experience
          </Typography>
          <Button color="inherit" component={RouterLink} to="/experiences">
            Experiences
          </Button>
          {/* Add more navigation items as needed */}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={10} mb={4}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};