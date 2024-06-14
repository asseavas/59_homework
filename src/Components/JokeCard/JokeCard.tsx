import React from 'react';

interface Props {
  joke: string;
}

const JokeCard: React.FC<Props> = React.memo(({joke}) => {
  return (
    <div className="card">
      <div className="card-body">
        <p>{joke}</p>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.joke === prevProps.joke;
});

export default JokeCard;