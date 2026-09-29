import { useState } from "react";

function Dashboard({ username, role, onLogout }) {
  const [postExists, setPostExists] = useState(true);

  return (
    <div className="card">
      <h2>Welcome, {username} ({role})</h2>

      {role === "Admin" ? (
        postExists ? (
          <button onClick={() => setPostExists(false)}>
            Delete Post
          </button>
        ) : (
          <p>Post deleted successfully!</p>
        )
      ) : (
        <p>Read-only access</p>
      )}

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;