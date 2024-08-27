import { ReactElement, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { CommonStore } from "../../shared/store.ts";
import { UserService } from "../../service/UserService.ts";
import { Button, Input } from "@quark-uilib/components";
import { IUser } from "../../models/User/IUser.ts";
import { useSearchParams } from "react-router-dom";
import { StoreContext } from "../../main.tsx";

export const UserPage = observer((): ReactElement => {
  const [state, setState] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await UserService.userUpdate(USER_ID, {
        firstName: firstName,
        lastName: lastName
      });
      setMessage("User updated successfully");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update user");
    }
  };

  useEffect(() => {
    store.getUser(USER_ID);
  }, [USER_ID, store]);

  console.log(store.isAuth, "User updated successfully");

  return (
    <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      CurrUser:
      <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      {store.user.firstName}
      </div>
      <Input
        placeholder="измените имя"
        onChange={(_e, val) => setFirstName(val)}
        value={firstName}
      />
      <Input
        placeholder="измените фамилию"
        onChange={(_e, val) => setLastName(val)}
        value={lastName}
      />
      <Button onClick={handleUpdate}>Обновить данные</Button>
      {message && <p>{message}</p>}
    </div>
  );
});
