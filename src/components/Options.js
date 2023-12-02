import React from 'react';

export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  function handleAnswer(index) {
    dispatch({
      type: 'newAnswer',
      payload: index,
    });
  }

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          } ${index === answer && 'answer'}`}
          key={option}
          disabled={hasAnswered}
          onClick={() => handleAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
