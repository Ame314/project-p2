// pages/props/Props.jsx
import React from 'react';
import Texto from '../../components/Texto';

function Saludo({ nombre }) {
  return <p>Hola, {nombre}! Bienvenido a React.</p>;
}



function Props() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Qué son las Props?</h2>

      <Texto>
        En React, las <strong>props</strong> (abreviación de "properties") son parámetros que se pasan a los componentes como si fueran atributos en HTML.
      </Texto>

      <Texto>
        Las props permiten que un componente reciba datos del componente padre y los utilice para renderizar contenido dinámico. Así, puedes crear componentes reutilizables con diferentes valores.
      </Texto>

      <Texto>Ejemplo básico:</Texto>

      <pre style={estiloCodigo}>
        <code>
{`function Saludo(props) {
  return <p>Hola, {props.nombre}!</p>;
}

// Uso:
<Saludo nombre="Amelie" />`}
        </code>
      </pre>

      <Texto>También puedes desestructurar las props directamente:</Texto>

      <pre style={estiloCodigo}>
        <code>
{`function Saludo({ nombre }) {
  return <p>Hola, {nombre}!</p>;
}`}
        </code>
      </pre>

      <Texto>A continuación, un ejemplo real:</Texto>

      <Saludo nombre="Amelie" />
      <Saludo nombre="Eliana" />
      <Saludo nombre="Andrés" />

      <Texto>
        También puedes usar props para pasar otros tipos de datos, como números, booleanos, funciones o incluso componentes.
      </Texto>

      <Texto>Props con diferentes tipos:</Texto>

      <pre style={estiloCodigo}>
        <code>
{`function Perfil({ nombre, edad, esAdmin }) {
  return (
    <div>
      <h4>{nombre}</h4>
      <p>Edad: {edad}</p>
      {esAdmin && <p>Usuario administrador</p>}
    </div>
  );
}

// Uso:
<Perfil nombre="Carlos" edad={30} esAdmin={true} />`}
        </code>
      </pre>

      <Texto>Ejemplo real con props booleanas:</Texto>

      <Perfil nombre="Carlos" edad={30} esAdmin={true} />
      <Perfil nombre="Lucía" edad={22} esAdmin={false} />

      <Texto>
        En resumen, las props son la forma principal de pasar información entre componentes en React. No se pueden modificar dentro del componente que las recibe, por eso se consideran de solo lectura.
      </Texto>
    </div>
  );
}

// Componente de ejemplo adicional
function Perfil({ nombre, edad, esAdmin }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
      <h4>{nombre}</h4>
      <p>Edad: {edad}</p>
      {esAdmin && <p style={{ color: 'green' }}> Usuario administrador</p>}
    </div>
  );
}

const estiloCodigo = {
  background: '#f4f4f4',
  padding: '1rem',
  borderRadius: '8px',
  overflowX: 'auto',
  marginBottom: '1.5rem',
};

export default Props;
