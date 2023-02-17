import React from 'react';

const StatusMessage = ({ winner, isXNext, squares }) => {
  console.log(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const noMovesLeft = squares.every((sqaureValue) => {
    return sqaureValue !== null;
  });

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }

    if (!winner && noMovesLeft) {
      return <div>Draw</div>;
    }

    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {' '}
            {nextPlayer}{' '}
          </span>
        </div>
      );
    }

    return null;
  };

  return <div className='status-message'>{renderStatusMessage()}</div>;
};

export default StatusMessage;
