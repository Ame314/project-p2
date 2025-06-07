// pages/CompMultiple.jsx
import React, { useState } from 'react';

function CompMultiple() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcularTodo = () => {
    const a = parseFloat(valor1);
    const b = parseFloat(valor2);

    if (isNaN(a) || isNaN(b)) {
      setResultados({ error: 'Introduce valores válidos' });
      return;
    }

    const eurosADolares = (a * 1.07).toFixed(2) + ' USD';
    const celsiusAF = ((b * 9) / 5 + 32).toFixed(2) + ' °F';
    const area = (a * b).toFixed(2) + ' m²';

    setResultados({
      eurosADolares,
      celsiusAF,
      area,
    });
  };

  return (
    <div>
      <h2>Componente Múltiple</h2>

      <input
        type="number"
        value={valor1}
        onChange={(e) => setValor1(e.target.value)}
        placeholder="Euros / Alto"
      />

      <input
        type="number"
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
        placeholder="Celsius / Ancho"
      />

      <button onClick={calcularTodo}>Calcular</button>

      {resultados && (
        <div style={{ marginTop: '20px' }}>
          {resultados.error ? (
            <p>{resultados.error}</p>
          ) : (
            <>
              <p><strong>Euros a Dólares:</strong> {resultados.eurosADolares}</p>
              <p><strong>Celsius a Fahrenheit:</strong> {resultados.celsiusAF}</p>
              <p><strong>Superficie (Área):</strong> {resultados.area}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CompMultiple;
