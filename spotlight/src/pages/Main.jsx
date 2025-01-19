import './Main.css';
import Suggestions from '../components/Suggestions';
import spotlightLogo from '../images/spotlightlogo.png';


const Main = () => {

	return (
        <div className ="home-container">
            <nav className ="home-nav">
                <div className ="home-logo">
                <a href ="/main">
                    <img src={spotlightLogo} alt = "Spotlight" />
                </a>
                </div>
                <div className ="home-right">
                    <a href ="/login" className ="home-button login">Log In</a>
                    <a href ="/signup" className ="home-button login">Sign Up</a>
                </div>
            </nav>
            <h1 className = "home-title">
                Find <span className = "highlight">Spotlights</span> near you
            </h1>
            <Suggestions />
        </div>
    );
};

export default Main;