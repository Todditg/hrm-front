import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;  
  min-width: 375px;
  max-width: 1920px;
  min-height: 911px;
  max-height: 1440px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.backgroundTetriary1};
`;
