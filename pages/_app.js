import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";

const { provider, chains } = configureChains([mainnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "dorito",
  chains,
});

const client = createClient({
  autoConnect: true,
  provider,
  connectors,
});

function dorito({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider 
	  chains={chains} 
	  theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default dorito;
