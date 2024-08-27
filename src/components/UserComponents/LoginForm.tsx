import { ReactElement, useContext, useState } from "react";
import { StoreContext } from "../../main.tsx";
import { observer } from "mobx-react-lite";
import { Button, Input } from "@quark-uilib/components";
import {useNavigate} from "react-router-dom";

const LoginForm = observer((): ReactElement => {
  {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { store } = useContext(StoreContext);

    const navigate = useNavigate();

      console.log(store.isAuth, "User updated successfully")
    const handleLogin = (): void => {
        store.login(email, password);
        navigate("/userPage")
    };

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
        <Button onClick={handleLogin}>Логин</Button>
      </div>
    );
  }
});

export default LoginForm;
