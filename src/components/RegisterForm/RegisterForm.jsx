import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import { Form, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <p>Username</p>
        <Input type="text" name="name" />
      </Label>
      <Label>
        <p>Email</p>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <p>Password</p>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
