// pages/Viaje.jsx
import React, { useState } from 'react';

function Viaje() {
  const [noches, setNoches] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcularCostos = () => {
    const dias = parseInt(noches);
    if (isNaN(dias) || dias <= 0) {
      setResultados({ error: 'Introduce un número válido de días' });
      return;
    }

    const costoHotel = dias * 40;

    let costoCoche = dias * 40;
    if (dias >= 7) {
      costoCoche -= 50;
    } else if (dias >= 3) {
      costoCoche -= 20;
    }

    setResultados({
      hotel: `${costoHotel} €`,
      coche: `${costoCoche} €`,
    });
  };

  return (
    <div>
      <h2>Ejercicio Costo de Viaje</h2>

      <label>
        Número de días:
        <input
          type="number"
          value={noches}
          onChange={(e) => setNoches(e.target.value)}
          placeholder="Ej: 5"
        />
      </label>

      <br /><br />
      <button onClick={calcularCostos}>Calcular</button>

      {resultados && (
        <div style={{ marginTop: '20px' }}>
          {resultados.error ? (
            <p>{resultados.error}</p>
          ) : (
            <>
              <p><strong>Costo del Hotel:</strong> {resultados.hotel}</p>
              <p><strong>Costo del Alquiler de Coche:</strong> {resultados.coche}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Viaje;
