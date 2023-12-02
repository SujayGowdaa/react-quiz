import React from 'react';

export default function FinishScreen({ points, totalPoints, highscore }) {
  const percentage = (points / totalPoints) * 100;
  let emoji;
  let champ = false;
  if (percentage === 100) {
    emoji = '🏆';
    champ = true;
  }
  if (percentage >= 80 && percentage < 100) emoji = '🍾';
  if (percentage >= 60 && percentage < 80) emoji = '🥂';
  if (percentage >= 40 && percentage < 60) emoji = '🙂';
  if (percentage >= 20 && percentage < 40) emoji = '🤨';
  if (percentage < 20) emoji = '🤦‍♂️';

  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)<span>{emoji}</span>
      </p>
      <p className='highscore'>Highest Score: {highscore} points</p>
      {champ && <p className='champ'>You are a champ! 🧠</p>}
    </>
  );
}
