import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "@quark-uilib/components";

export const Home = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px" }}>
        ЗАХОДИТЕ ГОСТИ ДОРОГИЕ В МОЮ ХРМ
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button
          onClick={() => navigate("/signUp")}
          viewType="secondary"
          replace={true}
        >
          Sign up
        </Button>
        <Button
          onClick={() => navigate("/signIn")}
          viewType="secondary"
          replace={true}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
