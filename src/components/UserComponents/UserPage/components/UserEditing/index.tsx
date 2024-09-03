import { ReactElement, useState } from "react";
import { Button, Input } from "@quark-uilib/components";
import { UserEditingContainer } from "./style.ts";
import { UserService } from "../../../../../service/UserService.ts";

export const UserDataEditing = (): ReactElement => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const USER_ID = localStorage.getItem("userID");

  const handleUpdate = async (e: any) => {
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

  return (
    <UserEditingContainer>
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
    </UserEditingContainer>
  );
};
