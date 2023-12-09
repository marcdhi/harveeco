"use client";
import { Button } from "@/components/ui/button";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useState } from "react";
import abi from "../contractABIs/harveecoDao.json";
export default function CreateProposal() {
  const [proposalName, setProposalName] = useState("This is a test proposal");
  const [proposalDescription, setProposalDescription] = useState(
    "This is a test proposal description"
  );

  const daoContractAddress = "0x98dd2f0158Bb1C8f745c8Cbe5FE08580ce00bb26";

  const { config } = usePrepareContractWrite({
    address: daoContractAddress,
    abi: abi,
    functionName: "createProposal",
    args: [proposalName, proposalDescription],
    cacheTime: 1000,
  });

  const { write, isLoading, isSuccess, isIdle } = useContractWrite(config);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    alert(
      `Submitting Proposal Name ${proposalName} and Proposal Description ${proposalDescription}`
    );
    // console.log("hello ; ",process.env.NEXT_PUBLIC_ALCHEMY_API_KEY);
    write?.();
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Create Proposal</h1>
      <form  className="flex flex-col">
        <label className="flex flex-col">
          Proposal Name:
          <input
            className="border-2 border-gray-500"
            type="text"
            value={proposalName}
            onMouseUp={(e) => setProposalName(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Proposal Description:
          <input
            className="border-2 border-gray-500"
            type="text"
            value={proposalDescription}
            onChange={(e) => setProposalDescription(e.target.value)}
          />
        </label>
        <Button type="submit" className="mt-4" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
