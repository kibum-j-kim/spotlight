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
            Sign Up
        </button>
    );
};

const SignUp = () => {
	return (
        <div>
            <Button />
        Sign Up</div>
    );
};

export default SignUp;