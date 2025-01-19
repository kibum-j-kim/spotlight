import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import './App.css';


const Button = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/main");
    };

    return (
        <button
            onClick={handleClick}
        >
            Login
        </button>
    );
};

const App = () => (
    <div style={{ textAlign: "center" }}>

        <Routes>
            <Route path="/" element={<div>
                <Button />
                Welcome to Login</div>} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </div>
);

export default App;
