import React from 'react';
import { NextPage } from 'next';
import { Box, Typography } from '@mui/material';

export const Header: NextPage = () => (
  <Box sx={{
    bgcolor: '#7092BE',
    borderRadius: 4,
    textAlign: 'center',
  }}
  >
    <Typography variant="h1">Boku no Cato</Typography>
  </Box>
);
