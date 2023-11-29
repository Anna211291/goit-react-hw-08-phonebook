import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from 'hooks';
import { StyledNav } from './Navigation.styled';

const Links = styled(NavLink)`
  font-size: 24px;
  color: gray;
  text-decoration: none;
  &.active {
    color: #7eb101;
    font-weight: 700;
    font-size: 26px;
    text-decoration: underline;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <Links to="/">Home</Links>
      {isLoggedIn && <Links to="/contacts">Contacts</Links>}
    </StyledNav>
  );
};
