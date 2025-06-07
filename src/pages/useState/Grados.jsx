// pages/useState/Grados.jsx
import React, { useState } from 'react';

function Grados() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  const convertir = () => {
    const valor = parseFloat(celsius);
    if (isNaN(valor)) {
      setFahrenheit('Introduce un número válido');
    } else {
      setFahrenheit(((valor * 9) / 5 + 32).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Convertir Grados Celsius a Fahrenheit (useState)</h2>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Celsius"
      />
      <button onClick={convertir}>Convertir</button>
      {fahrenheit && <p>Fahrenheit: {fahrenheit}</p>}
    </div>
  );
}

export default Grados;
