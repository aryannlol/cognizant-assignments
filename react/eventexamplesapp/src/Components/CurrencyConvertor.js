import React, { useState } from 'react';

export const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [euro, setEuro] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = parseFloat(amount) / 90;
    setEuro(converted.toFixed(2));
  };
  return (
    <div>
      <h3>Currency Convertor (INR to EUR)</h3>
      <form onSubmit={handleSubmit}>
        <input type=" number\ value={amount} onChange={(e) => setAmount(e.target.value)} placeholder=\INR Amount\ required />
 <button type=\submit\>Convert</button>
 </form>
 {euro && <p>Equivalent Euros: €{euro}</p>}
 </div>
 );
};
