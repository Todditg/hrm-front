import styled from "styled-components";

export const UserEditingContainer = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 32px;
  gap: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundTetriary0};
  width: 100%;
  height: 100%;
`;