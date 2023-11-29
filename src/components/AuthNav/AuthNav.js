import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { StyledAuthNav } from './AuthNav.styled';

const Links = styled(NavLink)`
  font-size: 24px;
  color: gray;
  text-decoration: none;
  &.active {
    color: #7eb101;
    font-size: 26px;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <Links to="/register">Register</Links>
      <Links to="/login">Log In</Links>
    </StyledAuthNav>
  );
};
