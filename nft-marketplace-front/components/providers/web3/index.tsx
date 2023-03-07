import { ethers } from "ethers";
import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { createInitialState, Web3State } from "./web3State";

const Web3Context = createContext<Web3State>(createInitialState());

const Web3Provider: FunctionComponent<Props> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createInitialState());

  useEffect(() => {
    function initWeb3() {
      const ethereum = window.ethereum;
      const provider = new ethers.BrowserProvider(ethereum);

      -setWeb3Api({
        ethereum,
        provider,
        contract: null,
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
