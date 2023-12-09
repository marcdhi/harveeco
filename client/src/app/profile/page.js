"use client";
import { DataOptions } from "@/components/DataOptions";
import { DialogDemo } from "@/components/Dialog";
import { TableDemo } from "@/components/Proposals";
import Inputs from "@/components/Propose";
import Token from "@/components/VotingPower";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Profile() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    async function getProposals() {
      const res = await fetch("http://localhost:3000/api/proposals");
      const data = await res.json();
      setProposals(data.proposals);
      console.log(data);
    }
    getProposals();
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      {/* <Token /> */}

      <DialogDemo />

      <h2>Proposals</h2>

      <TableDemo />

    </div>
  );
}
