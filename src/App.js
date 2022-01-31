import './App.css';
import React from 'react';
import { useWeb3React } from "@web3-react/core";
import {injected} from './connectors/connector';
import {useNavigate} from "react-router-dom";

function App() {
  const navigate= useNavigate();
  const [installed, setInstalled] = React.useState(false);
  const { active, account, activate} = useWeb3React();
  React.useEffect(() => {
    if (Boolean(window.ethereum && window.ethereum.isMetaMask)) {
      setInstalled(true);
    }
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      setInstalled(true);
      window.open("https://metamask.app.link/dapp/web3-demo-lemon.vercel.app/");
    }
  }, []);
  React.useEffect(() => {
    if(active){
      navigate(`/${account}`);
    }
  },[active]);
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
      <main>
      {installed ? <button className='button' onClick={connect}>Connect your metamask wallet</button>:
      <h1>Please install metamask</h1>}
      </main>
  );
}

export default App;
