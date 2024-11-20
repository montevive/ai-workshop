import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
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