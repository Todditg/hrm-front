import styled from "styled-components";

export const UserDataPanelContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundTetriary0};
  padding: 32px;
  border-radius: 16px;
`;
