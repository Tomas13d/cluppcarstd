import { Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home";
import "./App.css";

function App() {
 
  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view/:content" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
