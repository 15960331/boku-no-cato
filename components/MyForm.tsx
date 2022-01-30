import React, { useState } from 'react';
import { NextPage } from 'next';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import axios from 'axios';

type Response = {
  file :string;
};

export const MyForm: NextPage = () => {
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    const res = await axios.get<Response>('https://aws.random.cat/meow');
    setSource(res.data.file);
    setLoading(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box sx={{ p: 1 }}>
        <LoadingButton
          variant="contained"
          size="large"
          loading={loading}
          onClick={onClick}
        >
          CATTO
        </LoadingButton>
      </Box>
      <div>
        <Box
          component="img"
          src={source}
          maxHeight="70%"
          maxWidth="70%"
        />
      </div>
    </Box>
  );
};
