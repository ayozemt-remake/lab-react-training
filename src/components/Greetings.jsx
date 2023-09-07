function Greetings({ lang, children }) {
  const greet = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="idCard">
      <p style={{ marginLeft: '10px' }}>
        {greet[lang]} {children}
      </p>
    </div>
  );
}

export default Greetings;
