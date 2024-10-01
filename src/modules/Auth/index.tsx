import { ReactElement, useContext, useState } from "react";
import { StoreContext } from "../../main.tsx";
import { observer } from "mobx-react-lite";
import { Button, Input, Select } from "@quark-uilib/components";
import { AuthFormContainer } from "./style.ts";

const AuthForm = observer((): ReactElement => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const { store } = useContext(StoreContext);

    console.log(store.isAuth);

    return (
        <AuthFormContainer>
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
            <Select size="m" placeholder="Выберите роль" />
            <Button
                onClick={() =>
                    store.registration(email, password, firstName, lastName)
                }>
                Регистрация
            </Button>
        </AuthFormContainer>
    );
});

export default AuthForm;
