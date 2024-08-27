import { ReactElement, useContext, useState } from "react";
import { StoreContext } from "../../main.tsx";
import { observer } from "mobx-react-lite";
import { Button, Input } from "@quark-uilib/components";

const AuthForm = observer((): ReactElement => {
  {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const { store } = useContext(StoreContext);

    console.log(store.isAuth, "User updated successfully")

    return (
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexDirection: "column",
          width: "100%"
        }}>
        <Input
          onChange={(e, val) => setEmail(val)}
          value={email}
          type="text"
          placeholder="Email"
        />
        <Input
          onChange={(e, val) => setPassword(val)}
          value={password}
          type="password"
          placeholder="Пароль"
        />
        <Input
          onChange={(e, val) => setFirstName(val)}
          value={firstName}
          type="text"
          placeholder="Имя"
        />
        <Input
          onChange={(e, val) => setLastName(val)}
          value={lastName}
          type="text"
          placeholder="Фамилия"
        />
        <Button
          onClick={() =>
            store.registration(email, password, firstName, lastName)
          }>
          Регистрация
        </Button>
      </div>
    );
  }
});

export default AuthForm;
