import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home";
import "./App.css";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const token  = window.localStorage.getItem('token')
    if (!token) navigate("/login");
  }, []);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view/:content" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
