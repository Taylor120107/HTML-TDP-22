import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello There!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const NamesApp = () => {

  const Details = {
    Forename : "Luke",
    Surname : "Taylor",
    Hobbies : "Music"
  }

  return (
    <div>
      <p>{Details}</p>
      
    </div>
  );
}


export default App;
