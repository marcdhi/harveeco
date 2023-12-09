"use client";
import { usePrepareContractWrite } from "wagmi";
import { useWallets } from "@privy-io/react-auth";
import abi from "../contractABIs/harveecoToken.json";
import { Button } from "./ui/button";
import { useContractWrite } from "wagmi";

export const Withdraw = ({ amount }) => {
  const { wallets } = useWallets();
  console.log(wallets);
  const to = wallets[0].address;

  const { config } = usePrepareContractWrite({
    address: "0x4cfD16d83cb9cDF4B300FFE60274fe16607982F3",
    abi: abi,
    functionName: "mint",
    args: [to, amount],
  });

  const { write, isLoading, isSuccess } = useContractWrite(config);

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
