import React from 'react';

export default function StartScreen({ numQuestions, dispatch }) {
  function handleClick() {
    dispatch({ type: 'startGame' });
  }

  return (
    <div>
      <h2>Welcome to React Quiz! 🧠</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className='btn btn-ui' onClick={handleClick}>
        Let's start 🤓
      </button>
    </div>
  );
}
