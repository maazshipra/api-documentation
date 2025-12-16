import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

function Layout() {
  // const token = localStorage.getItem('token');
  const token = 'dummy';

  return (
    <Box sx={{ display: 'flex' }}>
      {token ? <Outlet /> : <Navigate to="/login" />}
    </Box>
  );
}

export default Layout;
