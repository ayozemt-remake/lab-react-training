function Rating({ children }) {
  const rounded = Math.round(children);
  const stars = {
    0: '☆☆☆☆☆',
    1: '★☆☆☆☆',
    2: '★★☆☆☆',
    3: '★★★☆☆',
    4: '★★★★☆',
    5: '★★★★★',
  };

  const rating = stars[rounded];

  return (
    <div>
      <p style={{ fontSize: '30px', marginLeft: '10px', lineHeight: '30%' }}>
        {rating}
      </p>
    </div>
  );
}

export default Rating;
