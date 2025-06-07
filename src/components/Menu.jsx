import React from 'react';

function Menu({ setPantalla }) {
  const botones = [
    { id: 'conceptos', nombre: 'Conceptos' },
    { id: 'useref-euros', nombre: 'useRef - Euros a Dólares' },
    { id: 'useref-grados', nombre: 'useRef - Grados a Fahrenheit' },
    { id: 'useref-superficie', nombre: 'useRef - Superficie Rectángulo' },
    { id: 'usestate-superficie', nombre: 'useState - Superficie Rectángulo' },
    { id: 'usestate-euros', nombre: 'useState - Euros a Dólares' },
    { id: 'usestate-grados', nombre: 'useState - Grados a Fahrenheit' },
    { id: 'usestate-superficie-auto', nombre: 'useState - Superficie sin botón' },
    { id: 'componentes', nombre: 'Componentes' },
    { id: 'componentes-euros', nombre: 'Comp. - Euros a Dólares' },
    { id: 'componentes-grados', nombre: 'Comp. - Grados a Fahrenheit' },
    { id: 'componentes-superficie', nombre: 'Comp. - Superficie Rectángulo' },
    { id: 'props', nombre: 'Props' },
    { id: 'props-post', nombre: 'Props - Post Component' },
    { id: 'props-euros', nombre: 'Props - Euros a Dólares' },
    { id: 'props-grados', nombre: 'Props - Grados a Fahrenheit' },
    { id: 'props-superficie', nombre: 'Props - Superficie Rectángulo' },
    { id: 'condicional', nombre: 'Renderizado Condicional' },
    { id: 'comp-multiple', nombre: 'Componente Múltiple' },
    { id: 'viaje', nombre: 'Costo de Viaje' },
    { id: 'array', nombre: 'Recorrer Array' },
    { id: 'speech', nombre: 'Memorizar Speech' },
  ];

  return (
    <nav style={{
      width: '240px',
      background: '#f0f0f0',
      padding: '20px',
      height: '100vh',
      overflowY: 'auto'
    }}>
      <h3>Menú</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {botones.map(({ id, nombre }) => (
          <li key={id}>
            <button
              onClick={() => setPantalla(id)}
              style={{ marginBottom: '10px', width: '100%' }}
            >
              {nombre}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
