import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  InputLoginWrapper,
  LoginBtn,
  StyledLoginForm,
  StyledLoginLable,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLoginLable>
        Email
        <InputLoginWrapper type="email" name="email" />
      </StyledLoginLable>
      <StyledLoginLable>
        Password
        <InputLoginWrapper type="password" name="password" />
      </StyledLoginLable>
      <LoginBtn type="submit">Log In</LoginBtn>
    </StyledLoginForm>
  );
};
