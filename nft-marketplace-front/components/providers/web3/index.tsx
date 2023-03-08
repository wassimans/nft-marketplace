import { ethers } from "ethers";
import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { createInitialState, loadContract, Web3State } from "./web3State";

const Web3Context = createContext<Web3State>(createInitialState());

const Web3Provider: FunctionComponent<Props> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createInitialState());

  useEffect(() => {
    async function initWeb3() {
      const ethereum = window.ethereum;
      const provider = new ethers.BrowserProvider(ethereum);
      const contract = await loadContract("NftMarket", provider);

      -setWeb3Api({
        ethereum,
        provider,
        contract: contract,
        loading: false,
      });
    }
    initWeb3();
  }, []);
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
