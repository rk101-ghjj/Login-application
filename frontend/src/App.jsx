import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;