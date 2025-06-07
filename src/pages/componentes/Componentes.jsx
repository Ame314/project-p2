// pages/componentes/Componentes.jsx
import React from 'react';
import Texto from '../../components/Texto';

function Componentes() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Qué son los Componentes?</h2>

      <Texto>
        Un componente en React es una función que devuelve JSX. Puedes reutilizarlo múltiples veces en diferentes partes de tu aplicación. Los componentes permiten dividir la interfaz de usuario en partes independientes y reutilizables, lo que facilita el desarrollo y el mantenimiento del código.
      </Texto>

      <Texto>
        Existen dos tipos principales de componentes en React: <strong>componentes de clase</strong> y <strong>componentes funcionales</strong>. Los componentes de clase son más antiguos y permiten manejar el estado y el ciclo de vida del componente, mientras que los componentes funcionales son más simples y se utilizan comúnmente con <em>hooks</em>.
      </Texto>

      <Texto>
        La ventaja de usar componentes es que puedes encapsular la lógica y el estilo de cada parte de tu interfaz, lo que mejora la organización del código. Además, React se encarga de actualizar y renderizar solo los componentes que han cambiado, lo que optimiza el rendimiento.
      </Texto>

      <Texto>
        Para crear un componente, simplemente defines una función que retorna un bloque de JSX. Por ejemplo:
      </Texto>

      <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
        <code>
{`function MiComponente() {
  return <div>Hola, soy un componente!</div>;
}`}
        </code>
      </pre>

      <Texto>
        Este componente puede ser utilizado en otros componentes simplemente importándolo y usándolo como una etiqueta HTML. Por ejemplo:
      </Texto>

      <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
        <code>
{`import MiComponente from './MiComponente';

function App() {
  return (
    <div>
      <MiComponente />
    </div>
  );
}`}
        </code>
      </pre>

      <Texto>
        En resumen, los componentes son la base de cualquier aplicación React, permitiendo crear interfaces de usuario complejas de manera modular y eficiente.
      </Texto>
    </div>
  );
}

export default Componentes;
