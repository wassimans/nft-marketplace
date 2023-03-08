import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider, Contract, ethers } from "ethers";

const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID;

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

export const loadContract = async (
  name: string,
  provider: BrowserProvider
): Promise<Contract> => {
  if (!NETWORK_ID) {
    return Promise.reject("Network ID is not defined!");
  }

  const res = await fetch(`/contracts/${name}.json`);
  const artifact = await res.json();
  const contractAddress = artifact.networks[NETWORK_ID!].address;

  return contractAddress
    ? new ethers.Contract(contractAddress, artifact.abi, provider)
    : Promise.reject(`Contract ${name} cannot be loaded!`);
};

// Declare ethereum as a global window property so we can access it later (see Home page)
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
