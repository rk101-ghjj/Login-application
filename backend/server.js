const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const users = [];

// SIGNUP API

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required",
    });
  }

  const userExists = users.find((user) => user.username === username);

  if (userExists) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  users.push({ username, password });

  return res.status(201).json({
    message: "User registered successfully",
  });
});

// LOGIN API

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }

  return res.status(200).json({
    message: "Login successful",
    username: username,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});