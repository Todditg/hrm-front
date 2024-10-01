import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, DARK_THEME } from "@quark-uilib/components";
import { BrowserRouter } from "react-router-dom";
import { CommonStore } from "./shared/store.ts";
import { createContext } from "react";

interface State {
  store: CommonStore;
}

const store = new CommonStore();

export const StoreContext = createContext<State>({
  store,
});

createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider
    value={{
      store,
    }}
  >
    <BrowserRouter>
      <ThemeProvider theme={DARK_THEME}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreContext.Provider>
);
