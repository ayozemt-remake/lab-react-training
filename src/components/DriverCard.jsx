import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div
      style={{
        border: '1px solid white',
        margin: '10px',
        backgroundColor: 'royalblue',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '30%',
        color: 'white',
      }}
    >
      <img
        src={img}
        alt="driverPhoto"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '100px',
          margin: '20px',
          objectFit: 'cover',
        }}
      />
      <div>
        <h2 style={{ marginLeft: '10px' }}>{name}</h2>
        <Rating>{rating}</Rating>
        <p style={{ marginLeft: '10px' }}>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
