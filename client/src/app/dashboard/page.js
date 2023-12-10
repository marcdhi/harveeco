"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CreateProposal from "@/components/CreateProposal";
import { useContractRead } from "wagmi";
import abi from "../../contractABIs/harveecoDao.json";
import { useContractReadLoop } from "@/components/MultiRead";
export default function Dashboard() {
  const daoContractAddress = "0x98dd2f0158Bb1C8f745c8Cbe5FE08580ce00bb26";
  
  //convert data to int
  //loop over data
  //get proposal data

  const proposals = [
    {
      id: 0,
      title: "test",
      description: "test",
      votes: 0,
      status: "active",
    },
    {
      id: 1,
      title: "test",
      description: "test",
      votes: 0,
      status: "active",
    },
    {
      id: 2,
      title: "test",
      description: "test",
      votes: 0,
      status: "active",
    },
    {
      id: 3,
      title: "test",
      description: "test",
      votes: 0,
      status: "active",
    },
    {
      id: 4,
      title: "test",
      description: "test",
      votes: 0,
      status: "active",
    }
  ]

  const {data , isLoading , isError} = useContractRead({
    daoContractAddress,
    abi,
    functionName: "getProposal",
    args: ['0'],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="flex flex-col w-screen">
      <h1
      >Dashboard</h1>

      <CreateProposal />

      <h2>Proposals</h2>

      {
        proposals.map((proposal) => (
          <div key={proposal.id} className="flex justify-between border-2 border-black p-2">
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
            <p>{proposal.votes}</p>
            <p>{proposal.status}</p>
            <Button>Vote</Button>
          </div>
        ))
      }

    </div>
  );
}
