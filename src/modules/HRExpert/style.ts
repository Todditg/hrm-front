import styled from "styled-components";

export const UserDataPanelContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSecondaryGrayscale};
  padding: 32px;
  border-radius: 16px;
`;

export const UserDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
