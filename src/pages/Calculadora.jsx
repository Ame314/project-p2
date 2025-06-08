import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const manejarOperacion = (operador) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return setResultado('Ingresa números válidos');

    switch (operador) {
      case '+':
        setResultado(a + b);
        break;
      case '-':
        setResultado(a - b);
        break;
      case '*':
        setResultado(a * b);
        break;
      case '/':
        setResultado(b !== 0 ? a / b : 'No se puede dividir por cero');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Número 1" />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Número 2" />
      <div>
        <button onClick={() => manejarOperacion('+')}>+</button>
        <button onClick={() => manejarOperacion('-')}>-</button>
        <button onClick={() => manejarOperacion('*')}>*</button>
        <button onClick={() => manejarOperacion('/')}>/</button>
      </div>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Calculadora;
