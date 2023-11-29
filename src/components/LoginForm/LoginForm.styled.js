import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 460px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 22px;
  color: #7eb101;
  font-size: 16px;
  font-weight: 700;
  border: 4px solid #7eb101;
  padding: 26px;
  border-radius: 15px;
  margin-top: 60px;
`;

export const StyledLoginLable = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const InputLoginWrapper = styled.input`
  width: 100%;
  height: 36px;
  font-size: 20px;
  padding: 4px;
  outline: none;
  border: 2px solid #bbf330;
  &:hover {
    border: 3px solid #7eb101;
  }
  border-radius: 8px;
  background-color: transparent;
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  gap: 4px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  color: #7eb101;
  border: 2px solid #7eb101;
  &:hover {
    background-color: #7eb101;
    color: white;
  }
  font-weight: 700;
  font-size: 14px;
  padding: 8px;
  margin-top: 20px;
`;
