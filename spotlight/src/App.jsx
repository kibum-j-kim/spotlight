import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";  
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

const App = () => (
    <div style={{ textAlign: "center" }}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
);

export default App;
