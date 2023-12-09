"use client";
import { usePrepareContractWrite } from "wagmi";
import { useWallets } from "@privy-io/react-auth";
import abi from "../contractABIs/harveecoDao.json";
import { Button } from "./ui/button";
import { useContractWrite } from "wagmi";

export const Withdraw = ({ amount }) => {
  const { wallets } = useWallets();
  console.log(wallets);
  const to = "0x7319EC9dFbE3f9e2fd42694156312DF3a525730f";

  const { config } = usePrepareContractWrite({
    address: "0x4cfD16d83cb9cDF4B300FFE60274fe16607982F3",
    abi: abi,
    functionName: "mint",
    args: [to, Math.floor(amount * 1e18)],
  });

  const { write, isLoading, isSuccess , isIdle} = useContractWrite(config);

  if (isLoading) return <div>Loading...</div>;
  if (isSuccess) return <div>Success!</div>;


  return (
    <div>
      <Button disabled={!write} onClick={() => write?.()} className="mt-4">
        Withdraw
      </Button>
    </div>
  );
};
