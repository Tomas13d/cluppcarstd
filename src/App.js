import { Route, Router, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<SignIn />} />
      {/* <Route exact path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
