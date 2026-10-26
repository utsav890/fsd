
import React, { useState, useEffect } from 'react';

const App = () => {
  const [index, setIndex] = useState(0);

  const images = [
    'https://picsum.photos/id/10/800/400',
    'https://picsum.photos/id/20/800/400',
    'https://picsum.photos/id/30/800/400',
    'https://picsum.photos/id/40/800/400',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        style={{
          width: '600px',
          maxWidth: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />

      <p>
        Image {index + 1} of {images.length}
      </p>

      <button
        onClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
      >
        Previous
      </button>

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        style={{ marginLeft: '10px' }}
      >
        Next
      </button>
    </div>
  );
};

export default App;
