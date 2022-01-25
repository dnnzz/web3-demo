import { InjectedConnector } from '@web3-react/injected-connector'

// what is chainId - > https://chainlist.org/ details can be found at this link.

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})