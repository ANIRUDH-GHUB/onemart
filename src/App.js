import { useState } from "react";
import "./App.css";
import { LogContext } from "./context";
import AppRoute from "./routes/AppRoute";
import { isUserLoggedIn } from "./services/loginService";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());

  return (
    <div className="App">
      <LogContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <AppRoute />
      </LogContext.Provider>
    </div>
  );
}

export default App;
