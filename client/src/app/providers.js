"use client";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { chains, config } from "../chains";
import { PrivyProvider } from "@privy-io/react-auth";

export function Providers({ children }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <PrivyProvider
    //   appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      appId={"clpxid1p500ijjp0fzu3fy5z0"}
    
      onSuccess={(user) => console.log(`User ${user.id} logged in!`)}
      config={{
        supportedChains: chains,
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <WagmiConfig config={config}>{mounted && children}</WagmiConfig>
    </PrivyProvider>
  );
}
