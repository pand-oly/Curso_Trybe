import Box from './container/Box';
import Header from './Header';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container-pokemon'>
        {data.map(pokemon => <Box key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </div>
  );
}

export default App;
