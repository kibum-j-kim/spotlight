import './Main.css';
import Suggestions from '../components/Suggestions';

const Main = () => {

	return (
        <div className ="home-container">
            <nav className ="home-nav">
                <a href = "/" className ="home-link">SpotLight</a>
                <div className ="home-right">
                    <a href ="/login" className ="home-link">Log In</a>
                    <a href ="/signup" className ="home-link">Sign Up</a>
                </div>
            </nav>
            <div className = "home-content">
                <Suggestions />
            </div>
        </div>
    );
};

export default Main;