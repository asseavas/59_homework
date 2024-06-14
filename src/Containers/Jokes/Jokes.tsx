import { useEffect, useState } from 'react';
import JokeCard from '../../Components/JokeCard/JokeCard';

interface Joke {
  id: string;
  joke?: string;
  setup?: string;
  delivery?: string;
}

const url = 'https://v2.jokeapi.dev/joke/Programming';

const Jokes = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: Joke = await response.json();
        setJoke(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const jokePromise = fetchJoke();
    jokePromise.catch((error) => console.error('Error in useEffect:', error));
  }, []);

  const getJokeText = (joke: Joke) => {
    if (joke.joke) {
      return joke.joke;
    } else if (joke.setup && joke.delivery) {
      return `${joke.setup} ... ${joke.delivery}`;
    } else if (joke.setup) {
      return joke.setup;
    }
    return 'No joke!';
  };

  return (
    <div>
      {joke && <JokeCard joke={getJokeText(joke)} />}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default Jokes;



