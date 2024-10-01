import styled from "styled-components";

export const VacancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
    border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondaryGrayscale};
`;
