function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idCard">
      <div className="profilePic">
        <img src={picture} alt="profilePic" />
      </div>
      <div>
        <p>
          <b>First Name:</b> {firstName}
        </p>
        <p>
          <b>Last Name:</b> {lastName}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
        <p>
          <b>Height:</b> {height / 100}m
        </p>
        <p>
          <b>Birth:</b> {birth.toUTCString().slice(0, 16)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
