import React from 'react';
import './styles.css'; // Importamos los estilos

// Componente Button 
const Button = ({ text, onClick, className }) => {
  const handleClick = () => {
    console.log('Botón presionado:', text);
    onClick();
  };

  return <button className={className} onClick={handleClick}>{text}</button>;
};

// Componente principal MiTeclado
const MiTeclado = ({ onKeyPress }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="keyboard-container">
      <div className="keyboard">
        {alphabet.split('').map(letter => (
          <Button 
            key={letter} 
            text={letter} 
            onClick={() => onKeyPress(letter)} 
          />
        ))}
        <Button 
          key="space" 
          text="␣" 
          className="space-key" 
          onClick={() => onKeyPress(' ')} 
        />
        <Button 
          key="backspace" 
          text="⌫" 
          className="backspace-key" 
          onClick={() => onKeyPress('backspace')} 
        />
      </div>
    </div>
  );
};

export default MiTeclado;