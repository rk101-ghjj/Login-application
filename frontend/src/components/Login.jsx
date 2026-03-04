import React, { useState, useEffect } from "react";
import { loginUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

   
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUser({ username, password });

      localStorage.setItem("username", response.data.username);


      navigate("/welcome");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <br />

     
      <p>
        New user? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;