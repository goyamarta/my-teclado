import React from 'react';

// Componente Button dentro del mismo archivo
const Button = ({ text, onClick }) => {
  const handleClick = () => {
    console.log('Botón presionado:', text);
    onClick();
  };

  return <button onClick={handleClick}>{text}</button>;
};

// Componente principal MiTeclado
const MiTeclado = ({ onKeyPress }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="keyboard">
      {alphabet.split('').map(letter => (
        <Button key={letter} text={letter} onClick={() => onKeyPress(letter)} />
      ))}
      <Button key="space" text="␣" onClick={() => onKeyPress(' ')} />
      <Button key="backspace" text="⌫" onClick={() => onKeyPress('backspace')} />
    </div>
  );
};

export default MiTeclado;