function BoxColor({ r, g, b }) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  return (
    <div>
      <p
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          margin: '10px',
          padding: '10px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '200%',
          border: '1px solid black',
        }}
      >
        rgb({r}, {g}, {b}) <br />
        {rgbToHex(r, g, b)}
      </p>
    </div>
  );
}

export default BoxColor;
