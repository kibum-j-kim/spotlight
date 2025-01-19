import './Main.css';
import Suggestions from '../components/Suggestions';
import spotlightLogo from '../images/spotlightlogo.png';
import SearchBar from '../components/SearchBar';

import Drawer from '../components/Drawer';
import LocationSearch from '../components/LocationSearch';

const Main = () => {

    return (
        <div className="home-container">
            <div style={{height: '50px', backgroundColor: 'white'}}>
            </div>
            <nav className="home-nav">
                <div className="home-logo">
                    <a href="/main">
                        <img src={spotlightLogo} alt="Spotlight" />
                    </a>
                </div>
                <div className="home-right">
                    <a href="/login" className="home-button login">Log In</a>
                    <a href="/signup" className="home-button login">Sign Up</a>
                </div>
            </nav>
            <Drawer>
            </Drawer>
            <h1 className="home-title">
                Find <span className="highlight">Spotlights</span> near you
            </h1>
            <div className="map-background">
                <div className="top-search">
                    <LocationSearch />
                </div>
                <div className="bottom-search">
                    <SearchBar />
                </div>
            </div>
            <div>
                <Suggestions />
            </div>
        </div>
    );
};

export default Main;