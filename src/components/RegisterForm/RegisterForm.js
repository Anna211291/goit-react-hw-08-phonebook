import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  InputWrapper,
  RegisterBtn,
  StyledRegisterForm,
  StyledRegisterLable,
} from './RegisterForm.styled';

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
    form.reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit} autoComplete="off">
      <StyledRegisterLable>
        Username
        <InputWrapper type="text" name="name" />
      </StyledRegisterLable>
      <StyledRegisterLable>
        Email
        <InputWrapper type="email" name="email" />
      </StyledRegisterLable>
      <StyledRegisterLable>
        Password
        <InputWrapper type="password" name="password" />
      </StyledRegisterLable>
      <RegisterBtn type="submit">Register</RegisterBtn>
    </StyledRegisterForm>
  );
};
