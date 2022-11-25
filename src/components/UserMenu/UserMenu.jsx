import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/authOperations';

import { Username, Button } from './UserMenu.styled';
import { Box } from './../Box';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box as="div" display="flex" alignItems="center">
      <Username>
        user: <span>{user.name}</span>
      </Username>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
