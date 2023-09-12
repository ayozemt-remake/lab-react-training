function Random({ min, max }) {
  const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <p style={{ margin: '10px', border: '1px solid black', padding: '10px' }}>
        Random value between {min} and {max} is {random}.
      </p>
    </div>
  );
}

export default Random;
