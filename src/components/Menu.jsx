import React from 'react';

function Menu({ setPantalla }) {
  return (
    <nav style={{
      width: '200px',
      background: '#f0f0f0',
      padding: '20px',
      height: '100vh'
    }}>
      <h3>Menú</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><button onClick={() => setPantalla('conceptos')}>Conceptos</button></li>
        {/* Aquí irán más botones */}
      </ul>
    </nav>
  );
}

export default Menu;
