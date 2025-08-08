// pages/login.js
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(data.message);
    } else {
      setMessage(data.error || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br/>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        /><br/>
        <label>Password:</label><br/>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        /><br/>
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
          }
