// pages/useState/Euros.jsx
import React, { useState } from 'react';

function Euros() {
  const [euros, setEuros] = useState('');
  const [dolares, setDolares] = useState(null);

  const convertir = () => {
    const valor = parseFloat(euros);
    if (isNaN(valor)) {
      setDolares('Introduce un número válido');
    } else {
      setDolares((valor * 2).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Convertir Euros a Dólares (useState)</h2>
      <input
        type="number"
        value={euros}
        onChange={(e) => setEuros(e.target.value)}
        placeholder="Euros"
      />
      <button onClick={convertir}>Convertir</button>
      {dolares && <p>Dólares: {dolares}</p>}
    </div>
  );
}

export default Euros;
