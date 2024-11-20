import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ExperienceCard } from '../components/experience/ExperienceCard';

// Mock data for experiences (replace with actual data fetching later)
const mockExperiences = [
    {
      id: 1,
      title: 'Alhambra Tour',
      description: 'Guided tour of the famous Alhambra palace and fortress complex.',
      image: 'https://picsum.photos/seed/alhambra/400/300',
    },
    {
      id: 2,
      title: 'Flamenco Night',
      description: 'Experience the passion of flamenco in a traditional Granada tavern.',
      image: 'https://picsum.photos/seed/flamenco/400/300',
    },
    {
      id: 3,
      title: 'Sierra Nevada Hike',
      description: 'Explore the beautiful Sierra Nevada mountains with a guided hike.',
      image: 'https://picsum.photos/seed/sierranevada/400/300',
    },
    {
      id: 4,
      title: 'Tapas Crawl',
      description: 'Discover the best tapas bars in Granada with a local food expert.',
      image: 'https://picsum.photos/seed/tapas/400/300',
    },
    // ... existing code ...
  ];
  

export const ExperiencesPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" mb={4}>
        Experiences in Granada
      </Typography>
      <Grid container spacing={3}>
        {mockExperiences.map((experience) => (
          <Grid item xs={12} sm={6} md={4} key={experience.id}>
            <ExperienceCard experience={experience} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};