import React, { useState } from 'react';
import './App.css';
import MiTeclado from './component/mi-teclado';
import Result from './component/result';

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
      <h1>Mi Teclado Virtual</h1>
      
      <div className="result-display-container">
        <Result text={result} />
      </div>
      
      <h3 className="result-label">Resultado:</h3>
      
      <MiTeclado onKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;