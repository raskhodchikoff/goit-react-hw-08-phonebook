import { useAuth } from 'hooks';

import { HomeLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <HomeLink to="/contacts">Phonebook</HomeLink>}
    </nav>
  );
};
