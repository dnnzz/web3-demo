import './App.css';
import React from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected } from './connectors/connector';

function App() {
  const [installed, setInstalled] = React.useState(false);
  React.useEffect(() => {
    if (Boolean(window.ethereum && window.ethereum.isMetaMask)) {
      setInstalled(true);
    }
  }, []);
  const { active, account, library,  activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div className="App">
      {installed ? <button onClick={connect}>Connect your metamask wallet</button>:
      <h1>Please install metamask</h1>}
      {account && 
      <>
      <h1>{account}</h1>
      <button onClick={(e) => library.eth.getBalance(account).then(data => console.log(data)) }>get balance</button>
      </>}
    </div>
  );
}

export default App;
