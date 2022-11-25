import { useAuth } from 'hooks';

import UserMenu from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { Navigation } from './Navigation/Navigation';

import { Box } from './Box';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={3}
      fontSize={4}
      borderBottom="m"
      borderColor="greyBorder"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
