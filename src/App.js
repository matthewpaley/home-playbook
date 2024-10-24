import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>
          <br></br>
          Owning a home just got easy.
          <br></br>
        </b>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://github.com/matthewpaley/home-playbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
