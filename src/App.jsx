import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Pages/Welcome";
// import Login from "./Pages/Auth/Login";
// import Register from "./Pages/Auth/Register";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  )
}

