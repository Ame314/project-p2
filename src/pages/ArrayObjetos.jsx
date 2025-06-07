import React, { useState } from 'react';

const personas = [
  { id: 1, nombre: 'Amelie', edad: 18, ciudad: 'Quito', profesion: 'Desarrolladora' },
  { id: 2, nombre: 'Eliana', edad: 20, ciudad: 'Guayaquil', profesion: 'Diseñadora' },
  { id: 3, nombre: 'Federico', edad: 50, ciudad: 'Cuenca', profesion: 'Profesor' },
  { id: 4, nombre: 'Lucía', edad: 28, ciudad: 'Loja', profesion: 'Ingeniera' },
  { id: 5, nombre: 'Carlos', edad: 42, ciudad: 'Ambato', profesion: 'Arquitecto' },
  { id: 6, nombre: 'Sofía', edad: 30, ciudad: 'Quito', profesion: 'Médica' },
  { id: 7, nombre: 'Javier', edad: 29, ciudad: 'Guayaquil', profesion: 'Abogado' },
  { id: 8, nombre: 'María', edad: 22, ciudad: 'Cuenca', profesion: 'Estudiante' },
  { id: 9, nombre: 'Andrés', edad: 45, ciudad: 'Loja', profesion: 'Contador' },
  { id: 10, nombre: 'Valentina', edad: 33, ciudad: 'Ambato', profesion: 'Psicóloga' },
  { id: 11, nombre: 'Diego', edad: 38, ciudad: 'Quito', profesion: 'Ingeniero de Software' },
  { id: 12, nombre: 'Natalia', edad: 27, ciudad: 'Guayaquil', profesion: 'Fotógrafa' },
  { id: 13, nombre: 'Pablo', edad: 31, ciudad: 'Cuenca', profesion: 'Chef' },
  { id: 14, nombre: 'Camila', edad: 24, ciudad: 'Loja', profesion: 'Artista' },
  { id: 15, nombre: 'Luis', edad: 41, ciudad: 'Ambato', profesion: 'Gerente' },
  { id: 16, nombre: 'Isabella', edad: 26, ciudad: 'Quito', profesion: 'Investigadora' },
  { id: 17, nombre: 'Fernando', edad: 39, ciudad: 'Guayaquil', profesion: 'Periodista' },
  { id: 18, nombre: 'Gabriela', edad: 34, ciudad: 'Cuenca', profesion: 'Abogada' },
  { id: 19, nombre: 'Ricardo', edad: 48, ciudad: 'Loja', profesion: 'Músico' },
  { id: 20, nombre: 'Ana', edad: 23, ciudad: 'Ambato', profesion: 'Estudiante' },
  { id: 21, nombre: 'Hugo', edad: 37, ciudad: 'Quito', profesion: 'Arquitecto' },
  { id: 22, nombre: 'Claudia', edad: 32, ciudad: 'Guayaquil', profesion: 'Diseñadora Gráfica' },
  { id: 23, nombre: 'Esteban', edad: 29, ciudad: 'Cuenca', profesion: 'Ingeniero Civil' },
  { id: 24, nombre: 'Laura', edad: 25, ciudad: 'Loja', profesion: 'Bióloga' },
  { id: 25, nombre: 'Santiago', edad: 44, ciudad: 'Ambato', profesion: 'Veterinario' },
  { id: 26, nombre: 'Marta', edad: 36, ciudad: 'Quito', profesion: 'Nutricionista' },
  { id: 27, nombre: 'Cristian', edad: 40, ciudad: 'Guayaquil', profesion: 'Piloto' },
  { id: 28, nombre: 'Patricia', edad: 21, ciudad: 'Cuenca', profesion: 'Estudiante' },
  { id: 29, nombre: 'Jorge', edad: 46, ciudad: 'Loja', profesion: 'Físico' },
  { id: 30, nombre: 'Silvia', edad: 39, ciudad: 'Ambato', profesion: 'Ingeniera de Sistemas' },
  { id: 31, nombre: 'Rafael', edad: 28, ciudad: 'Quito', profesion: 'Desarrollador Web' },
  { id: 32, nombre: 'Verónica', edad: 34, ciudad: 'Guayaquil', profesion: 'Directora de Marketing' },
  { id: 33, nombre: 'Alberto', edad: 30, ciudad: 'Cuenca', profesion: 'Analista de Datos' },
  { id: 34, nombre: 'Carmen', edad: 22, ciudad: 'Loja', profesion: 'Estudiante de Medicina' },
  { id: 35, nombre: 'Oscar', edad: 43, ciudad: 'Ambato', profesion: 'Ingeniero Mecánico' },
  { id: 36, nombre: 'Luciana', edad: 31, ciudad: 'Quito', profesion: 'Investigadora Científica' },
  { id: 37, nombre: 'Felipe', edad: 38, ciudad: 'Guayaquil', profesion: 'Gerente de Proyectos' },
  { id: 38, nombre: 'Nadia', edad: 26, ciudad: 'Cuenca', profesion: 'Diseñadora de Moda' },
  { id: 39, nombre: 'Manuel', edad: 47, ciudad: 'Loja', profesion: 'Abogado Penalista' },
  { id: 40, nombre: 'Elena', edad: 24, ciudad: 'Ambato', profesion: 'Estudiante de Derecho' },
];


function ArrayObjetos() {
  const [busqueda, setBusqueda] = useState('');

  const resultados = personas.filter((persona) =>
    persona.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Recorrer un Array de Objetos</h2>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {resultados.length > 0 ? (
          resultados.map((item) => (
            <li key={item.id}>
              <strong>{item.nombre}</strong> ({item.edad} años) - {item.profesion} en {item.ciudad}
            </li>
          ))
        ) : (
          <li>No se encontraron resultados.</li>
        )}
      </ul>
    </div>
  );
}

export default ArrayObjetos;
