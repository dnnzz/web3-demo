import React from "react";
import { useParams } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
export default function Wallet() {
  const {address} = useParams();
  const {account,deactivate} = useWeb3React();
  async function disconnect() {
    try {
      deactivate()
      console.log("asdsad")
    } catch (ex) {
      console.log(ex)
    }
  }
    return <main>
      <span className='address'>{address.substring(0, 5)}…{address.substring(address.length - 4)}</span>
      <button onClick={disconnect}>Disconnect your wallet</button>
    </main>;
}
