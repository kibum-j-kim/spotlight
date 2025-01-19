import { useNavigate } from "react-router-dom";

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

const Login = () => {
	return (
        <div>
            <Button />
        Welcome to Login</div>
    );
};

export default Login;