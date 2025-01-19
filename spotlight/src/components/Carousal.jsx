import './Carousal.css';

const Carousal = () => {
  const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7'];

  return (
    <div className="scrollable-container">
      {buttons.map((button, index) => (
        <button key={index} className="scrollable-button">
          {button}
        </button>
      ))}
    </div>
  );
};

export default Carousal;