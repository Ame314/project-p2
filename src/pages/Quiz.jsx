import React, { useState } from 'react';

// Este es un componente de Quiz que permite a los usuarios responder preguntas y obtener un puntaje basado en sus respuestas correctas.
const preguntas = [
  {
    pregunta: '¿Cuál es el capital de Francia?',
    opciones: ['Madrid', 'París', 'Roma'],
    respuesta: 'París',
  },
  {
    pregunta: '¿Cuánto es 2 + 2?',
    opciones: ['3', '4', '5'],
    respuesta: '4',
  },
  {
    pregunta: '¿Quién escribió Cien años de soledad?',
    opciones: ['Gabriel García Márquez', 'Pablo Neruda', 'Mario Vargas Llosa'],
    respuesta: 'Gabriel García Márquez',
  },
  {
    pregunta: '¿Cuál es el océano más grande del mundo?',
    opciones: ['Atlántico', 'Índico', 'Pacífico'],
    respuesta: 'Pacífico',
  },
  {
    pregunta: '¿Qué planeta es conocido como el planeta rojo?',
    opciones: ['Marte', 'Júpiter', 'Venus'],
    respuesta: 'Marte',
  },
  {
    pregunta: '¿Quién pintó la Mona Lisa?',
    opciones: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci'],
    respuesta: 'Leonardo da Vinci',
  },
  {
    pregunta: '¿Cuál es la capital de España?',
    opciones: ['Barcelona', 'Madrid', 'Valencia'],
    respuesta: 'Madrid',
  },
  {
    pregunta: '¿Qué gas respiramos principalmente?',
    opciones: ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno'],
    respuesta: 'Nitrógeno',
  },
  {
    pregunta: '¿En qué año llegó el hombre a la Luna?',
    opciones: ['1969', '1971', '1965'],
    respuesta: '1969',
  },
  {
    pregunta: '¿Cuál es el continente más grande?',
    opciones: ['África', 'Asia', 'América'],
    respuesta: 'Asia',
  },
];

// Componente Quiz que muestra preguntas y permite al usuario responderlas
function Quiz() {
  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const manejarRespuesta = (opcion) => {
    if (opcion === preguntas[indice].respuesta) {
      setPuntaje(puntaje + 1);
    }

    if (indice + 1 < preguntas.length) {
      setIndice(indice + 1);
    } else {
      setMostrarResultado(true);
    }
  };
// Renderiza el componente Quiz
  return (
    <div>
      <h2>Quiz</h2>
      {mostrarResultado ? (
        <p>Obtuviste {puntaje} de {preguntas.length} respuestas correctas </p>
      ) : (
        <>
          <p>{preguntas[indice].pregunta}</p>
          {preguntas[indice].opciones.map((op, i) => (
            <button key={i} onClick={() => manejarRespuesta(op)}>{op}</button>
          ))}
        </>
      )}
    </div>
  );
}

export default Quiz;
