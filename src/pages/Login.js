import { LoginForm } from 'components/LoginForm/LoginForm';

import { Box } from './../components/Box';

export default function Login() {
  return (
    <div>
      <Box fontWeight={700} fontSize={20} textAlign="center" my={4}>
        If you already have an account, please login
      </Box>
      <LoginForm />
    </div>
  );
}
