import styled from "styled-components";
import { H } from "@quark-uilib/components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledHeaders = styled(H)`
  transition: opacity 1s ease-in;
`;
