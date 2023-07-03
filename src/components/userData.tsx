"use client"
import React from 'react';
import {Box, Typography} from '@mui/material';
import {useUser} from "@auth0/nextjs-auth0/client";
import LoadingPage from "@/components/loader";

export default function UserData() {
  const {user} = useUser();

  if (!user) {
    return <LoadingPage/>
  }

  const containerStyles = {
    width: '100vw',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  };

  const itemStyles = {
    marginBottom: '10px',
  };

  return (
      <Box sx={containerStyles}>
        <Typography variant="h3" sx={itemStyles}>
          Welcome, {user.name}
        </Typography>
        <Box sx={itemStyles}>
          <Typography variant="body2">
            Email: {user.email}
          </Typography>
        </Box>
        <Box sx={itemStyles}>
          <Typography variant="body2">
            Email Verified: {user.email_verified ? 'Yes' : 'No'}
          </Typography>
        </Box>
        <Box sx={itemStyles}>
          <Typography variant="body2">
            Nickname: {user.nickname}
          </Typography>
        </Box>
      </Box>
  );
}
