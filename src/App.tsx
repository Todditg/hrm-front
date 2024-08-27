import "./App.css";
import { Button } from "@quark-uilib/components";
import { useNavigate } from "react-router-dom";
import { AnimatedTextPage } from "./components/MarkupComponents/Greating";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <AnimatedTextPage />
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button onClick={() => navigate("/authForm")} replace={true}>
          Sign up
        </Button>
        <Button onClick={() => navigate("/loginForm")} replace={true}>
          Login
        </Button>
      </div>
    </>
  );
}

export default App;
