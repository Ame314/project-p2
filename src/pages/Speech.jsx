import React, { useState } from 'react';

function Speech() {
  const [nombre, setNombre] = useState('');
  const [indice, setIndice] = useState(0);

  const discurso = [
    'Hola, mi nombre es {{nombre}}.',
    'Estoy aprendiendo React para construir interfaces interactivas.',
    'React me permite dividir la UI en componentes reutilizables.',
    'La práctica constante me ayuda a mejorar cada día.',
    'Gracias por escuchar mi presentación.',
  ];

  const fraseActual = discurso[indice].replace('{{nombre}}', nombre || '...');

  const avanzar = () => {
    if (indice < discurso.length - 1) {
      setIndice(indice + 1);
    }
  };

  const retroceder = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  return (
    <div>
      <h2>Memorizar Speech</h2>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <div style={{ margin: '20px 0', fontSize: '1.2em' }}>
        <p>{fraseActual}</p>
      </div>

      <button onClick={retroceder} disabled={indice === 0}>
        ◀ Anterior
      </button>

      <button onClick={avanzar} disabled={indice === discurso.length - 1} style={{ marginLeft: '10px' }}>
        Siguiente ▶
      </button>
    </div>
  );
}

export default Speech;
