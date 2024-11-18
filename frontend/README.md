# Time Bank Experience Platform - Frontend

## Overview
Frontend application for the Time Bank Experience Platform, built with React and Material-UI (MUI), focused on providing a seamless experience for users and providers in Granada.

## 🛠 Tech Stack
- **Framework**: React 18+
- **UI Library**: Material-UI (MUI) v5
- **State Management**: Redux Toolkit
- **Routing**: React Router 6
- **Forms**: React Hook Form + MUI integration
- **API Client**: Axios
- **Testing**: React Testing Library & Jest
- **Internationalization**: react-i18next
- **Date Handling**: date-fns (MUI compatible)
- **Maps**: Mapbox GL JS
- **Charts**: MUI X Charts
- **Data Grid**: MUI X Data Grid
- **Theme**: MUI Custom Theme

## 📁 Project Structure
src/
├── assets/           # Static assets
├── components/       # Reusable components
├── config/          # Configuration files
├── features/        # Feature-based modules
├── hooks/           # Custom React hooks
├── layouts/         # Layout components
├── pages/           # Page components
├── services/        # API services
├── store/           # Redux store
├── theme/           # MUI theme customization
├── utils/           # Helper functions
└── App.tsx          # App entry point
## 🎨 MUI Theme Customization

### Theme Configuration
```typescript
// src/theme/index.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#38B2AC',
      light: '#4FD1C5',
      dark: '#319795',
    },
    secondary: {
      main: '#805AD5',
      light: '#9F7AEA',
      dark: '#6B46C1',
    },
    background: {
      default: '#F7FAFC',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    // ... more typography settings
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    // ... more component customizations
  },
});
⚡ Key ComponentsCommon Components
// src/components/common/CustomButton.tsx
import { Button, ButtonProps } from '@mui/material';

export const CustomButton = (props: ButtonProps) => {
  return <Button {...props} />;
};

// src/components/common/CustomCard.tsx
import { Card, CardContent, CardProps } from '@mui/material';

export const CustomCard = (props: CardProps) => {
  return <Card {...props} />;
};
Experience Components// src/components/experience/ExperienceCard.tsx
import { Card, CardMedia, Typography, Box } from '@mui/material';

export const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={experience.image}
        alt={experience.title}
      />
      <Box p={2}>
        <Typography variant="h6">{experience.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {experience.description}
        </Typography>
      </Box>
    </Card>
  );
};
🚀 Getting StartedPrerequisites
Node.js v18+
npm or yarn
Installation# Clone the repository
git clone https://github.com/your-org/timebank-frontend.git

# Install dependencies
npm install

# Start development server
npm start
Environment SetupCreate a .env file:REACT_APP_API_URL=http://localhost:8000/api/v1
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
📱 Pages and FeaturesLayout Components// src/layouts/MainLayout.tsx
import { Box, Container, AppBar, Toolbar } from '@mui/material';

export const MainLayout = ({ children }) => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          {/* Navigation items */}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={8}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};
Page Examples// src/pages/ExperiencesPage.tsx
import { Grid, Typography } from '@mui/material';
import { ExperienceCard } from '../components/experience';

export const ExperiencesPage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={4}>
        Experiences in Granada
      </Typography>
      <Grid container spacing={3}>
        {/* Experience cards */}
      </Grid>
    </Box>
  );
};
🔄 State ManagementRedux Store Setup// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import experiencesReducer from './experiencesSlice';
import bookingsReducer from './bookingsSlice';

export const store = configureStore({
  reducer: {
    experiences: experiencesReducer,
    bookings: bookingsReducer,
  },
});
🧪 Testing# Run all tests
npm test

# Run specific test
npm test ExperienceCard.test.tsx

# Run with coverage
npm test -- --coverage
Test Exampleimport { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import ExperienceCard from './ExperienceCard';

describe('ExperienceCard', () => {
  it('renders experience details correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ExperienceCard experience={mockExperience} />
      </ThemeProvider>
    );

    expect(screen.getByText(mockExperience.title)).toBeInTheDocument();
  });
});
📦 Dependencies{
  "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.14.18",
    "@mui/icons-material": "^5.14.18",
    "@mui/x-data-grid": "^6.18.1",
    "@mui/x-date-pickers": "^6.18.1",
    "@reduxjs/toolkit": "^1.9.7",
    "axios": "^1.6.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.19.0",
    "react-hook-form": "^7.48.2",
    "react-i18next": "^13.5.0",
    "date-fns": "^2.30.0",
    "mapbox-gl": "^2.15.0"
  },
  "devDependencies": {
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.4",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "typescript": "^5.2.2"
  }
}
🚀 DeploymentBuild# Create production build
npm run build

# Analyze bundle
npm run analyze
🔍 Performance Optimization
Component lazy loading
MUI tree shaking
Image optimization
Route-based code splitting
Memoization of components
Virtual scrolling for lists
🤝 Contributing
Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Open a Pull Request
📝 LicenseMIT License - see the LICENSE.md file for details