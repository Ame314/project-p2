// pages/useState/Superficie.jsx
import React, { useState } from 'react';

function Superficie() {
  const [alto, setAlto] = useState('');
  const [ancho, setAncho] = useState('');
  const [superficie, setSuperficie] = useState(null);

  const calcular = () => {
    const a = parseFloat(alto);
    const b = parseFloat(ancho);
    if (isNaN(a) || isNaN(b)) {
      setSuperficie('Introduce valores válidos');
    } else {
      setSuperficie(`${(a * b).toFixed(2)} m²`);
    }
  };

  return (
    <div>
      <h2>Superficie de un Rectángulo (useState con botón)</h2>
      <input
        type="number"
        value={alto}
        onChange={(e) => setAlto(e.target.value)}
        placeholder="Alto (m)"
      />
      <input
        type="number"
        value={ancho}
        onChange={(e) => setAncho(e.target.value)}
        placeholder="Ancho (m)"
      />
      <button onClick={calcular}>Calcular</button>
      {superficie && <p>Superficie: {superficie}</p>}
    </div>
  );
}

export default Superficie;
