import "./App.css";
import { Button } from "@quark-uilib/components";
import { useNavigate } from "react-router-dom";
import { AnimatedTextPage } from "./components/MarkupComponents/Greating";
import { Sidebar } from "./components/MarkupComponents/Sidebar";

function App() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <AnimatedTextPage />
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button
          onClick={() => navigate("/authForm")}
          viewType="secondary"
          replace={true}>
          Sign up
        </Button>
        <Button
          onClick={() => navigate("/loginForm")}
          viewType="secondary"
          replace={true}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default App;
