import logo from './logo.svg';
import './App.css';
import * as nearAPI from 'near-api-js';


// Our API could be improved here :)
// See: https://github.com/near/near-api-js/issues/612
async function viewMethodOnContract() {
  const provider = new nearAPI.providers.JsonRpcProvider('https://rpc.testnet.near.org');
  const rawResult = await provider.query(`call/crossword.friend.testnet/get_solution`, 'AQ4'); // Base 58 of '{}'
  return JSON.parse(rawResult.result.map((x) => String.fromCharCode(x)).join(''));
}

async function initCrossword() {
  const solutionHash = await viewMethodOnContract();
  return solutionHash ;
}

async function App() {
  var hashResult = await initCrossword();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Coded hash = {hashResult}
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

export default App;
