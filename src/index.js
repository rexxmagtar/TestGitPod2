import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as nearAPI from 'near-api-js';


// Our API could be improved here :)
// See: https://github.com/near/near-api-js/issues/612
async function viewMethodOnContract() {
  const provider = new nearAPI.providers.JsonRpcProvider('https://rpc.testnet.near.org');
  const rawResult = await provider.query(`call/friend.ivantestacc.testnet/get_solution`, 'AQ4'); // Base 58 of '{}'
  return JSON.parse(rawResult.result.map((x) => String.fromCharCode(x)).join(''));
}

async function initCrossword() {
  const solutionHash = await viewMethodOnContract();
  return solutionHash ;
}


initCrossword().then((result)=>{
  let app  = App(result)

  ReactDOM.render(
   
      app,
   
    document.getElementById('root')
  );
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
