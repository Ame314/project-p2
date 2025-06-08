import React from 'react';

function Conceptos() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}> Conceptos Aprendidos</h2>

      <h3>¿Qué es React?</h3>
      <p>
        React es una <strong>biblioteca de JavaScript</strong> desarrollada por Facebook para construir interfaces de usuario de forma declarativa y eficiente.
        Utiliza un sistema de componentes reutilizables para crear interfaces complejas a partir de piezas simples.
        React permite mantener sincronizado el estado de la aplicación con la interfaz gracias a un sistema de renderizado virtual llamado <strong>Virtual DOM</strong>.
      </p>

      <h3>¿Qué es una interfaz de usuario?</h3>
      <p>
        Es el conjunto de elementos visuales y funcionales con los que el usuario puede interactuar.
        Incluye botones, menús, formularios, iconos y cualquier otro componente gráfico que permita realizar acciones o visualizar información.
      </p>

      <h3>¿Qué es una SPA?</h3>
      <p>
        Una <strong>SPA (Single Page Application)</strong> es una aplicación web que se carga en una sola página HTML y actualiza dinámicamente el contenido sin recargar toda la página.
        Esto mejora el rendimiento, la experiencia de usuario y permite una navegación más fluida.
        React es ideal para crear SPAs gracias a su sistema de enrutamiento como <code>react-router-dom</code>.
      </p>

      <h3>Programación funcional vs POO en React</h3>
      <p>
        React promueve el uso de <strong>programación funcional</strong>, donde los componentes son funciones puras que retornan JSX.
        La <strong>programación orientada a objetos (POO)</strong> también se puede usar con componentes de clase, pero con la llegada de los <strong>hooks</strong>, el enfoque funcional ha ganado protagonismo.
        La programación funcional evita efectos secundarios, usa funciones puras y trabaja con datos inmutables.
      </p>

      <h3>¿Qué es Node.js?</h3>
      <p>
        Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite crear aplicaciones rápidas y escalables.
        Utiliza el motor V8 de Chrome para interpretar el código JavaScript fuera del navegador.
        Es ampliamente usado para construir backends, APIs y herramientas como <code>npm</code>.
      </p>

      <h3>¿Qué es Git?</h3>
      <p>
        Git es un <strong>sistema de control de versiones</strong> distribuido que permite llevar el control de los cambios realizados en un proyecto.
        Es una herramienta esencial en el desarrollo colaborativo, ya que permite crear ramas, fusionarlas, resolver conflictos y volver a versiones anteriores del código.
      </p>

      <h3>Comandos para crear app React</h3>
      <pre style={estiloCodigo}>
        npx create-react-app mi-app{"\n"}
        cd mi-app{"\n"}
        npm start
      </pre>
      <p>
        <code>npx</code> ejecuta paquetes sin necesidad de instalarlos globalmente. <code>create-react-app</code> configura una estructura base de proyecto React. <code>npm start</code> inicia el servidor de desarrollo.
      </p>

      <h3>¿Qué es JSX?</h3>
      <p>
        JSX (JavaScript XML) es una sintaxis que permite escribir HTML dentro de código JavaScript.
        Aunque los navegadores no entienden JSX directamente, herramientas como Babel lo convierten en código JavaScript tradicional.
        JSX permite construir interfaces visualmente más cercanas al HTML que el JavaScript puro.
      </p>

      <h3>¿Qué es Babel?</h3>
      <p>
        Babel es un <strong>compilador de JavaScript</strong> moderno que transforma código ES6+ o JSX en una versión que los navegadores puedan entender.
        Esto permite usar características modernas del lenguaje sin preocuparte por la compatibilidad.
      </p>

      <h3>¿Qué es Webpack?</h3>
      <p>
        Webpack es un <strong>empaquetador de módulos</strong> que agrupa todos los archivos de tu proyecto (JavaScript, CSS, imágenes, etc.) en uno o varios archivos para optimizar el rendimiento.
        Junto con Babel y otros loaders, se encarga del proceso de "construcción" de una app React.
      </p>

      <h3>¿Qué son los Hooks?</h3>
      <p>
        Los Hooks son funciones especiales de React que permiten usar estado y otras características sin escribir componentes de clase.
        Algunos hooks comunes son <code>useState</code>, <code>useEffect</code>, <code>useContext</code>.
      </p>

      <h3>¿Qué es el Virtual DOM?</h3>
      <p>
        El Virtual DOM es una representación ligera del DOM real. React lo usa para detectar qué partes del DOM deben actualizarse en función de los cambios en los componentes.
        Esto hace que React sea muy eficiente al actualizar solo los elementos necesarios.
      </p>
    </div>
  );
}

const estiloCodigo = {
  background: '#f4f4f4',
  padding: '1rem',
  borderRadius: '8px',
  fontFamily: 'monospace',
  whiteSpace: 'pre-wrap',
  marginBottom: '1rem',
};

export default Conceptos;
