"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function CreateProposal() {

  const [proposalName, setProposalName] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");

  const daoContract 

  const handleSubmit = (evt) => {
    evt.preventDefault();

    alert(
      `Submitting Proposal Name ${proposalName} and Proposal Description ${proposalDescription}`
    );

    

  };

  return (
    <div>
      <h1>Create Proposal</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Proposal Name:
          <input
            type="text"
            value={proposalName}
            onChange={(e) => setProposalName(e.target.value)}
          />
        </label>
        <label>
          Proposal Description:
          <input
            type="text"
            value={proposalDescription}
            onChange={(e) => setProposalDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
