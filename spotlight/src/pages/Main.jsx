import './Main.css';
import Suggestions from '../components/Suggestions';
import spotlightLogo from '../images/spotlightlogo.png';

import Drawer from '../components/Drawer';

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
            <Drawer>
            </Drawer>
            <h1 className="home-title">
                Find <span className = "highlight">Spotlights</span> near you
            </h1>
            <div className = "home-search">
                <input 
                    type = "text"
                    className = "search-bar"
                    placeholder = "Enter destination address.."
                />
            </div>
            <Suggestions />
        </div>
    );
};

export default Main;