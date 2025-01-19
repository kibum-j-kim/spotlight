import { useState } from 'react';
import './Drawer.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const LoginButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <button className = "drawer-button" onClick={handleClick}>
            Login
        </button>
    );
};

const SignUpButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signup");
    };

    return (
        <button className = "drawer-button" onClick={handleClick}>
            Sign Up
        </button>
    );
};

  return (
    <div>
      <button onClick={toggleDrawer} className="drawer-toggle-button">
        {isOpen ? 'Back' : 'Account'}
      </button>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
                    <div className="drawer-content">
                        <LoginButton className = "drawer-button" />
                        <SignUpButton className = "drawer-button"/>
                    </div>
                    <div className="drawer-text">
                        <p>Help</p>
                        <p>About Us</p>
                    </div>
                    <div>
                        <img src="spotlight\public\logo.png" alt="logo" />
                    </div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
    children: PropTypes.func.isRequired,
  };

export default Drawer;