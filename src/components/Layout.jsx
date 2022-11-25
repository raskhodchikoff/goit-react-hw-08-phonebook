import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from './AppBar';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box as="main" mx="auto" my={0} px={4} maxWidth="1024px">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
