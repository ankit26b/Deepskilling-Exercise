import React, { useState } from 'react';

function CurrencyConverter() {
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState('');

  const RATE = 0.011; // Approximate: ₹1 = €0.011

  const handleConvert = () => {
    const value = parseFloat(inr);
    if (isNaN(value)) {
      setEur('');
      alert('Enter a valid number');
      return;
    }
    setEur((value * RATE).toFixed(2));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>INR → EUR Converter</h3>
      <label>
        Amount in INR: &nbsp;
        <input
          type="text"
          value={inr}
          onChange={e => setInr(e.target.value)}
        />
      </label>
      <button onClick={handleConvert} style={{ marginLeft: '10px' }}>
        Convert
      </button>
      {eur !== '' && (
        <p>Amount in EUR: € {eur}</p>
      )}
    </div>
  );
}

export default CurrencyConverter;
