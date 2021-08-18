import React from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <p>
          Aquí haremos nuestro To-Do list
        </p>
        <Form />
      </div>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;*/
