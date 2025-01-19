import './Carousal2.css';

const Carousal2 = () => {
  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    { src: 'image4.jpg', alt: 'Image 4' },
    { src: 'image5.jpg', alt: 'Image 5' },
    { src: 'image6.jpg', alt: 'Image 6' },
    { src: 'image7.jpg', alt: 'Image 7' },
  ];

  return (
    <div className="scrollable-container">
      {images.map((image, index) => (
        <button key={index} className="image-button" onClick={() => alert(`Clicked on ${image.alt}`)}>
          <img src={image.src} alt={image.alt} className="image" />
        </button>
      ))}
    </div>
  );
};

export default Carousal2;