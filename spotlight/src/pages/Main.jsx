import Carousal2 from "../components/Carousal2";
import SearchBar from "../components/SearchBar";

const Main = () => {

	return (
        <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <SearchBar />
            <h1>Main Page Place Holder</h1>
            <Carousal2 />
        </div>
    );
};

export default Main;