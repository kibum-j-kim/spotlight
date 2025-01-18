import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
        border: "2px solid green",
        borderRadius: "4px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      Go to Login
    </button>
  );
};

const App = () => (
  <div style={{ textAlign: "center" }}>
    <Button />
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);

export default App;
