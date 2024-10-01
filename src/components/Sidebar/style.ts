import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.backgroundSecondaryGrayscale}
`;
