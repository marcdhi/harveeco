import { useState } from "react";
import { useContractReads } from "wagmi";

export const useContractReadLoop = (
  membersList,
  contract,
  abi,
  functionName
) => {
  const [list, setList] = useState([]);

  const { data, isError, isLoading } = useContractReads({
    contracts: list.map((item) => ({
      address: contract,
      abi: abi,
      ...item,
    })),
  });

  return data;
};
