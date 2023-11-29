import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { LogoutBtn, StyledGreeting, StyledUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenu>
      <StyledGreeting>Welcome, {user.name}</StyledGreeting>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </StyledUserMenu>
  );
};
