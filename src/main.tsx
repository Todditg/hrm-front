import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, DARK_THEME } from "@quark-uilib/components";
import { createContext } from "react";
import { CommonStore } from "./shared/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CSSGlobalStyle } from "./globalStyle.ts";
import { UserPage } from "./components/UserComponents/UserPage";
import AuthForm from "./components/UserComponents/Authform";
import LoginForm from "./components/UserComponents/Loginform";

interface State {
  store: CommonStore;
}

export const store = new CommonStore();

export const StoreContext = createContext<State>({
  store
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/userPage",
    element: <UserPage />
  },
  {
    path: "/authForm",
    element: <AuthForm />
  },
  {
    path: "/loginForm",
    element: <LoginForm />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider
    value={{
      store
    }}>
    <ThemeProvider theme={DARK_THEME}>
      <CSSGlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StoreContext.Provider>
);
