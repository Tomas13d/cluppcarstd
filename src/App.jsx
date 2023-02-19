import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import WithPrivateRoute from "./components/PrivateRoute/privateRoute";
import "./App.css";
import Home from "./components/Home";

function App() {
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
