import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Wallet from './components/Wallet';

function getLibrary(provider) {
  return new Web3(provider)
}
ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path=':address' element={<Wallet />} />
    </Routes>
  </BrowserRouter>
  </Web3ReactProvider>
  ,
  document.getElementById('root')
);
