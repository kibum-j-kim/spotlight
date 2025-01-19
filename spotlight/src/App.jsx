import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import './App.css';
import Login from "./pages/Login";

const App = () => (
    <div style={{ textAlign: "center" }}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </div>
);

export default App;
