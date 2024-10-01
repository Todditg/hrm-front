import { ReactElement, useContext, useEffect } from "react";
import { Content, UserDataContainer, UserDataPanelContainer } from "./style.ts";
import { StoreContext } from "../../main.tsx";
import { H, ITheme } from "@quark-uilib/components";
import { observer } from "mobx-react-lite";
import { Sidebar } from "../../components/Sidebar";
import { useTheme } from "styled-components";

export const HRPanel = observer((): ReactElement => {
  const { store } = useContext(StoreContext);

  const theme = useTheme() as ITheme;

  useEffect(() => {
    const USER_ID = localStorage.getItem("userID");
    store.getUser(USER_ID);
    console.log(store.user.lastName);
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <UserDataContainer>
        <UserDataPanelContainer>
          <H type="cancer" color={theme.colors.textBasicPressed}>
            {store.user.firstName}
          </H>
          <H type="cancer" color={theme.colors.textBasicPressed}>
            {store.user.lastName}
          </H>
        </UserDataPanelContainer>
        <Sidebar />
      </UserDataContainer>
      <Content>
      </Content>
    </div>
  );
});
