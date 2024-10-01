import "./AppStyle.ts";
import { ReactElement } from "react";
import { Routes } from "./shared/Routes.tsx";
import { AppStyled } from "./AppStyle.ts";
import { useLocation } from "react-router-dom";
import { HRPanel } from "./modules/HRExpert";

export const App = (): ReactElement => {
  const location = useLocation(); // Получаем текущий путь

  const hideSidebarRoutes = ["/signIn", "/signUp"];

  return (
    <AppStyled>
      {!hideSidebarRoutes.includes(location.pathname) && <HRPanel />}
      <Routes />
    </AppStyled>
  );
};

export default App;
