"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CreateProposal from "@/components/CreateProposal";
import { useContractRead } from "wagmi";
import abi from "../../contractABIs/harveecoDao.json";
import { useContractReadLoop } from "@/components/MultiRead";
import { proposals } from "./proposals";
import { CreateGroup } from "../pushChat/page";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Dashboard() {
  const daoContractAddress = "0x98dd2f0158Bb1C8f745c8Cbe5FE08580ce00bb26";

  const [name, setName] = useState("test")
  const [description, setDescription] = useState("test")
  const [group, setGroup] = useState()

  //convert data to int
  //loop over data
  //get proposal data

  const makeGroup = async (name,description) => {
    const group = await CreateGroup(name, description);
    console.log(group)
    setGroup(group)
  }

  console.log(group)

  const { data, isLoading, isError } = useContractRead({
    daoContractAddress,
    abi,
    functionName: "getProposal",
    args: ["0"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="flex flex-col w-screen">
      <h1 className=" text-4xl text-center font-semibold my-5">Dashboard</h1>
      {data}
      <div className="flex gap-20">
        <CreateProposal />
        <div className="w-[300px]">
          <Label htmlFor="name">Name</Label>
          <Input onChange={(e) => setName(e.target.value)} className="mb-3" id="name" placeholder="Name of the Group" />

          <Label htmlFor="name">Description</Label>
          <Input onChange={(e) => setDescription(e.target.value)} className="mb-3" id="name" placeholder="description of the group" />

          <Button onClick={() => makeGroup(name, description)}>Create Group</Button>
        </div>
      </div>

      <h2 className=" text-4xl text-center font-semibold my-5">Proposals</h2>

      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          className="flex justify-between border-2 border-black p-2"
        >
          <h3>{proposal.title}</h3>
          <p>{proposal.description}</p>
          <p>{proposal.votes}</p>
          <p>{proposal.status}</p>
          <Button>Vote</Button>
        </div>
      ))}
    </div>
  );
}
