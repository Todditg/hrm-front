import { ReactElement, useState } from "react";
import { H } from "@quark-uilib/components";
import {MainContainer} from "./style";
export const AnimatedTextPage = (): ReactElement => {
  const [state, setState] = useState();

  return (
    <MainContainer>
      <H type="aries">HELLO</H>
      <H type="aries">IT'S HRM SYSTEM</H>
      <H type="gemini"> (DESIGNED BY ARSENIY "todditg" KOCHERZHUK)</H>
    </MainContainer>
  );
};
