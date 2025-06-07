import React, { useState } from 'react';
import Menu from './components/Menu';
import Conceptos from './pages/Conceptos';

function App() {
  const [pantalla, setPantalla] = useState('conceptos');

  const renderContenido = () => {
    switch (pantalla) {
      case 'conceptos':
        return <Conceptos />;
      // Aquí irán luego los demás componentes
      default:
        return <h2>Pantalla no encontrada</h2>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Menu setPantalla={setPantalla} />
      <div style={{ marginLeft: '20px', padding: '20px', flex: 1 }}>
        {renderContenido()}
      </div>
    </div>
  );
}

export default App;
