import React from 'react';

export default function Restart({ dispatch }) {
  return (
    <div>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </div>
  );
}
