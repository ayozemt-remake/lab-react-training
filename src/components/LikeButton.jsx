import { useState } from 'react';

function LikeButton() {
  const [likesCounter, setLikesCounter] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const random = Math.floor(Math.random() * colors.length);

  return (
    <div>
      <button
        onClick={() => setLikesCounter((likes) => (likes += 1))}
        style={{
          marginLeft: '30px',
          padding: '20px',
          fontSize: '30px',
          cursor: 'pointer',
          backgroundColor: `${colors[random]}`,
        }}
      >
        {likesCounter} likes
      </button>
    </div>
  );
}

export default LikeButton;
