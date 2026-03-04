import React, { useState } from "react";
import { signupUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await signupUser({ username, password });

      setMessage(res.data.message);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Signup</button>
      </form>

      <p>{message}</p>

      <Link to="/">Already have an account? Login</Link>
    </div>
  );
};

export default Signup;