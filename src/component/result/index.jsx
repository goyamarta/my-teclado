import React from 'react';

const Result = ({ text }) => {
  return (
    <div className="result-display">
      <p>{text || 'Valor vacío'}</p>
    </div>
  );
};

export default Result;