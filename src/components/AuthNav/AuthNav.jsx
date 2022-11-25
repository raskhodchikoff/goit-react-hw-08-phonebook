import { EnterNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <EnterNav to="/register">Register</EnterNav>
      <EnterNav to="/login">Log In</EnterNav>
    </div>
  );
};
