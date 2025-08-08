// pages/register.js
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Backend API call for registration
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        /><br/>
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
        <button type="submit" style={{ padding: "10px 20px" }}>Register</button>
      </form>
    </div>
  );
            }
