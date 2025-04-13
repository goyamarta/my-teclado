import React, { useState } from 'react';
import './App.css';
import MiTeclado from './component/mi-teclado';

function App() {
  const [result, setResult] = useState('');

  const handleKeyPress = (key) => {
    setResult(prevResult => {
      if (key === 'backspace') {
        return prevResult.slice(0, -1);
      } else {
        return prevResult + key;
      }
    });
  };

  return (
    <div className="app">
      {/* Mostramos el resultado directamente aquí */}
      <div className="result-display">
        <h3>Resultado:</h3>
        <p>{result || 'Valor vacío'}</p>
      </div>
      
      <div className="keyboard">
        <MiTeclado onKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;