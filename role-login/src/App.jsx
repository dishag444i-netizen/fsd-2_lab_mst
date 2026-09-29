import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(name, selectedRole) {
    if (name.trim() === "") {
      alert("Please enter your username");
      return;
    }

    setUsername(name);
    setRole(selectedRole);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setUsername("");
    setRole("");
    setIsLoggedIn(false);
  }

  return (
    <div className="app">
      {isLoggedIn ? (
        <Dashboard
          username={username}
          role={role}
          onLogout={handleLogout}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;