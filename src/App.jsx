import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import WithPrivateRoute from "./components/PrivateRoute/privateRoute";
import Home from "./components/Home";
import { useEffect } from "react";
import auth from "./config/firebase";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        const token = user && (await user.getIdToken());
        console.log("token ->", token);
        const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await fetch("http://localhost:3001", payloadHeader);
        console.log(await res.text());
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
}, []);
  return (
    <AuthProvider>
      <Routes>
      <Route
            path="/"
            element={
              <WithPrivateRoute>
                <Home />
              </WithPrivateRoute>
            }
          />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
