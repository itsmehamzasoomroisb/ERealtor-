// pages/login.js
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap API call karenge login ke liye
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}
