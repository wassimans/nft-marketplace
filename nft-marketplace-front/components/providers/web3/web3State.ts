import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider, Contract } from "ethers";

export type Web3State = {
  loading: boolean; // true while loading web3 state
  ethereum: MetaMaskInpageProvider | null;
  provider: BrowserProvider | null;
  contract: Contract | null;
};

export const createInitialState = () => {
  return {
    ethereum: null,
    provider: null,
    contract: null,
    loading: true,
  };
};

// Declare ethereum as a global window property so we can access it later (see Home page)
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
