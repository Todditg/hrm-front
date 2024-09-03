import { ReactElement, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { CommonStore } from "../../../shared/store.ts";
import { UserService } from "../../../service/UserService.ts";
import { Button, Input } from "@quark-uilib/components";
import { IUser } from "../../../models/User/IUser.ts";
import { useSearchParams } from "react-router-dom";
import { StoreContext } from "../../../main.tsx";
import { UserPageContainer } from "./style.ts";
import {UserDataPanel} from "./components/UserDataPanel";
import {UserDataEditing} from "./components/UserEditing";

export const UserPage = observer((): ReactElement => {
  const { store } = useContext(StoreContext);

  const USER_ID = localStorage.getItem("userID");

  //TODO Вынести нахуй в стор {user: IUser}
  // const getUsers = async () => {
  //   try {
  //     const response = await UserService.getUsers();
  //     console.log(response.data);
  //     setUsers(response.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  useEffect(() => {
    store.getUser(USER_ID);
  }, [USER_ID, store]);

  console.log(store.isAuth, "User updated successfully");

  return (
    <UserPageContainer>
        <UserDataPanel />
        <UserDataEditing />
    </UserPageContainer>
  );
});
