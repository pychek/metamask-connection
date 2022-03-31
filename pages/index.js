import  {injected} from "../components/wallet/connectors";
import {useWeb3React, Web3ReactProvider} from "@web3-react/core";
import {useState} from "react";



function App() {

  const [keyContent, setKeyContent] = useState('')
  const {active, account, library, connector, activate, deactivate} = useWeb3React()

  const connect = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      await deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  const keyContentHandler = () => {
      if (active) {
          setKeyContent(`Public key: ${account}`)
      } else setKeyContent('MetaMask is locked - please login')
  }

  return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} className="App">
        <button style={{marginTop: 10}} onClick={connect}>Connect</button>
        <button style={{marginTop: 10}} onClick={disconnect}>Disconnect</button>
        <button style={{marginTop: 10}} onClick={keyContentHandler}>Get Public Key</button>
          <div style={{marginTop: 10}}>{keyContent}</div>
      </div>
  );
}

export default App;
