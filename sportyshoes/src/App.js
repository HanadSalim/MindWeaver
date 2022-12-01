import './App.css';
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import Page3 from './pages/Page3';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<SignIn/>} />
      <Route path="/login/page3" element={<Page3/>} />
    </Routes>
    </>
  );
}

export default App;
