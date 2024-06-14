import Movies from './Containers/Movies/Movies';
import Jokes from './Containers/Jokes/Jokes';
import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-2 justify-content-evenly">
          <div className="col-6">
            <Movies />
          </div>
          <div className="col-6">
            <Jokes />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
