import React from "react";
import { useParams } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
export default function Wallet() {
  const {address} = useParams();
  const {library} = useWeb3React();
  const [data,setData] = React.useState({
    username:'',
    walletaddress:address
  })
  const [balance,setBalance] = React.useState(null);
  const getBalance = async () =>{
    let balance = await library.eth.getBalance(address);
    return setBalance(balance);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const msgHash = library.eth.accounts.hashMessage(data.username);
    const signature = await library.eth.sign(msgHash, address);
    return signature;
  }
  const onChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  }
  React.useEffect(() => {
    getBalance();
  },[])
  console.log();
    return <main>
      <span className='address'>{address.substring(0, 5)}…{address.substring(address.length - 4)}</span>
      <h2>{balance} Ethereum</h2>
      {parseInt(balance) === 0 && <a href="https://www.binance.com/tr">Go buy some coins !! </a>}
      <form  className='form' onSubmit={(e)=> onSubmit(e)}>
        <label>
          Username
        </label>
        <input 
        name='username'
        onChange={onChange}
        value={data.username}
        type="text" />
        <label>
          Wallet address 
        </label>
        <input
        name='walletaddress'
        onChange={onChange}
        value={data.walletaddress}
        type="text" />
        <button className="button" style={{marginLeft:'20px'}} type="submit">Sign</button>
      </form>
    </main>;
}
