"use client";
import { useBalance } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useWallets } from "@privy-io/react-auth";

export default function Token() {
  const { wallets } = useWallets();

  const res = useBalance({
    address: "0x7319EC9dFbE3f9e2fd42694156312DF3a525730f",
    token: "0x4cfD16d83cb9cDF4B300FFE60274fe16607982F3",
    chainId: 314159,
  });

  if (res.isLoading) return <div>Loading...</div>;
  if (res.error) return;

  return (
    <div className="flex">
      <Card>
        <CardHeader className="flex flex-row items-center  space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {res.data.symbol} Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {
              //concat to 2 decimal places
              //parseint
              //format
              parseInt(res.data.formatted).toFixed(2)
            }{" "}
            {res.data.symbol}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
