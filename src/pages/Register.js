import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Box } from './../components/Box';

export default function Register() {
  return (
    <div>
      <Box fontWeight={700} fontSize={20} textAlign="center" my={4}>
        If you are new user, please register
      </Box>
      <RegisterForm />
    </div>
  );
}
