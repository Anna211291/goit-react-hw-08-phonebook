import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  gap: 22px;
`;

export const StyledGreeting = styled.p`
  display: flex;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  border: none;
  background-color: transparent;
  color: gray;
  border: 2px solid #7eb101;
  &:hover {
    background-color: #7eb101;
    color: white;
  }
  font-weight: 700;
  font-size: 14px;
  padding: 8px;
`;
