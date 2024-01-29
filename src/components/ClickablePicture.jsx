import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(true);

  const toggleImage = () => setImage(!image);

  return (
    <div onClick={toggleImage} style={{ margin: '20px' }}>
      {image ? (
        <img src={img} alt='Face' style={{ cursor: 'pointer' }} />
      ) : (
        <img src={imgClicked} alt='Sunglasses' style={{ cursor: 'pointer' }} />
      )}
    </div>
  );
}

export default ClickablePicture;
