import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { MainLayout } from './layouts/MainLayout';
import { ExperiencesPage } from './pages/ExperiencesPage';

// Import other pages as you create them
// import { HomePage } from './pages/HomePage';
// import { ProfilePage } from './pages/ProfilePage';
// import { BookingsPage } from './pages/BookingsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path="/experiences" element={<ExperiencesPage />} />
          {/* Add other routes as you create them */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* <Route path="/bookings" element={<BookingsPage />} /> */}
        </Routes>
      </MainLayout>
      
    </BrowserRouter>
  );
};

export default App;