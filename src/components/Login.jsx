import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={() => onLogin(username, "Admin")}>
        Login as Admin
      </button>

      <button onClick={() => onLogin(username, "Viewer")}>
        Login as Viewer
      </button>
    </div>
  );
}

export default Login;