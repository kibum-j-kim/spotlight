import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";  
import Main from "./pages/Main";

const App = () => (
    <div style={{ textAlign: "center" }}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </div>
);

export default App;
