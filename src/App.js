import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
