import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome {username} jii!!</h1>
      <p>You have successfully logged in.</p>

      <br />

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Welcome;