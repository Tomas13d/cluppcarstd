import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import WithPrivateRoute from "./components/PrivateRoute/privateRoute";
import Home from "./components/Home";
import { useEffect, useLayoutEffect } from "react";
import auth from "./config/firebase";
import "./App.css";

function App() {
  useLayoutEffect(() => {
    const generateToken = async () => {
      const user = auth.currentUser;
      const token = user && (await user.getIdToken());
      window.localStorage.setItem('Token', token)
    };
    generateToken();
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
