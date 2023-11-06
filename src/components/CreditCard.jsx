import visaLogo from '../assets/images/visa.png';
import masterLogo from '../assets/images/MasterCard_Logo.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div
      style={{
        border: '1px solid white',
        width: '370px',
        margin: '10px',
        backgroundColor: `${bgColor}`,
        borderRadius: '10px',
      }}
    >
      <img
        src={type === 'Visa' ? visaLogo : masterLogo}
        alt="cardLogo"
        style={{ width: '80px', float: 'right', margin: '10px' }}
      />
      <p
        style={{
          marginTop: '100px',
          color: `${color}`,
          textAlign: 'center',
          fontFamily: 'monospace',
          fontSize: '25px',
        }}
      >
        •••• •••• •••• {number.slice(-4)}
      </p>
      <p
        style={{
          marginLeft: '20px',
          marginTop: '40px',
          color: `${color}`,
          fontFamily: 'monospace',
        }}
      >
        Expires {expirationMonth > 10 ? expirationMonth : `0${expirationMonth}`}
        /{String(expirationYear).slice(-2)} {bank}
      </p>
      <p
        style={{
          marginLeft: '20px',
          color: `${color}`,
          fontFamily: 'monospace',
          marginBottom: '20px',
        }}
      >
        {owner}
      </p>
    </div>
  );
}

export default CreditCard;
