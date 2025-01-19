import './Main.css';
import Suggestions from '../components/Suggestions';
import Drawer from '../components/Drawer';

const Main = () => {
    
    return (
        <div className="home-container">
            <nav className="home-nav">
                <a>SpotLight</a>
                <div className="home-right">
                    <a>Sign Up</a>
                    <a>Login</a>
                </div>
            </nav>
            <Drawer>
            </Drawer>
            <div className="home-content">
                <Suggestions />
            </div>
        </div>
    );
};

export default Main;