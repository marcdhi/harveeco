"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CreateProposal from "@/components/CreateProposal";
import { useContractRead } from "wagmi";
import abi from "../../contractABIs/harveecoDao.json";
export default function Dashboard() {
  const [proposals, setProposals] = useState([]);
  const daoContractAddress = "0x98dd2f0158Bb1C8f745c8Cbe5FE08580ce00bb26";
  const { data, isError, isLoading } = useContractRead({
    address: daoContractAddress,
    abi: abi,
    functionName: "getProposalCount",
  });
  console.log(data);

 
  return (
    <div>
      <h1>Dashboard</h1>

      <CreateProposal />

      <h2>Proposals</h2>
    </div>
  );
}
