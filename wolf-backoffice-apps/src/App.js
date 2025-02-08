import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Appointments from "./components/Appointments";
import Dashboard from "./components/Dashboard";
import User from "./components/User";  // ✅ Import User component

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token") || "");

  return (
    <Router>
      <Routes>
        <Route path="/" element={authToken ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="/appointments" element={authToken ? <Appointments /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
