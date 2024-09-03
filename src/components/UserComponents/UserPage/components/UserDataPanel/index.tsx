import {ReactElement, useContext, useEffect, useState} from "react";
import { UserDataPanelContainer } from "./style.ts";
import { StoreContext } from "../../../../../main.tsx";
import {H} from "@quark-uilib/components";

export const UserDataPanel = (): ReactElement => {
  const [state, setState] = useState();

  const { store } = useContext(StoreContext);

  useEffect(() => {
    const USER_ID = localStorage.getItem("userID");
    store.getUser(USER_ID);
    console.log(store.user.lastName)
  }, [store.user]);

  return (
    <UserDataPanelContainer>
      <H type="gemini">
        {store.user.firstName}
      </H>
      {store.user.lastName}
    </UserDataPanelContainer>
  );
};
