import React, { useState } from 'react';

function AdivinaNumero() {
  const [numeroSecreto] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [intento, setIntento] = useState('');
  const [mensaje, setMensaje] = useState('');

  const verificar = () => {
    const n = parseInt(intento);
    if (isNaN(n)) return setMensaje('Ingresa un número válido');
    if (n === numeroSecreto) setMensaje(' ¡Correcto!');
    else if (n < numeroSecreto) setMensaje('📉 Muy bajo');
    else setMensaje('📈 Muy alto');
  };

  return (
    <div>
      <h2>Adivina el número (1-10)</h2>
      <input value={intento} onChange={(e) => setIntento(e.target.value)} />
      <button onClick={verificar}>Adivinar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default AdivinaNumero;
