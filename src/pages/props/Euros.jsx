// pages/props/Euros.jsx
import React, { useState } from 'react';

function Conversor({ tasa }) {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setResultado((numero * tasa).toFixed(2));
    } else {
      setResultado('Valor inválido');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Euros"
      />
      <button onClick={convertir}>Convertir</button>
      {resultado && <p>Dólares: {resultado}</p>}
    </div>
  );
}

function Euros() {
  return (
    <div>
      <h2>Props - Euros a Dólares</h2>
      <Conversor tasa={1.07} /> {/* Tasa de conversión de Euros a Dólares más adecuada */} 
    </div>
  );
}

export default Euros;
