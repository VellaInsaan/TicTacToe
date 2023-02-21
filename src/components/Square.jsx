import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  const colorChange = value === 'X' ? 'text-green' : 'text-orange';
  const winningColorChange = isWinningSquare ? 'winning' : '';
  return (
    <button
      type='button'
      className={`square ${colorChange} ${winningColorChange}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
