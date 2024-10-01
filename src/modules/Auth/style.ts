import styled from "styled-components";

export const AuthFormContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundTetriary0};
  padding: 32px;
  border-radius: 16px;
`;
