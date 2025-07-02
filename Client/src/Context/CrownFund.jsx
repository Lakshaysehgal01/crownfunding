import { createContext, useEffect, useState } from "react";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { toast } from "sonner";
import { Abi } from "../utils/ABI";
import { parseEther } from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { config, publicClient } from "../config/wagmi.js";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
const ContractAddress = import.meta.env.VITE_CONTARCT_ADDRESS;
export const CrownFundContext = createContext();

export const CrownFundProvider = ({ children }) => {
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  const addRecentTransaction = useAddRecentTransaction();
  const createCampaign = async (form) => {
    try {
      const tx = await writeContractAsync({
        address: ContractAddress,
        abi: Abi,
        functionName: "createCampaign",
        args: [
          address,
          form.title,
          form.description,
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      });
      await waitForTransactionReceipt(publicClient, {
        hash: tx,
        confirmations: 1,
      });
      addRecentTransaction({
        hash: tx,
        description: "Transaction to create a campaign",
      });
      toast.success("Campaign Created");
      return true;
    } catch (e) {
      toast.error("Failed to create a Campaign");
      return false;
    }
  };

  const donateToCampaign = async (id, amount) => {
    try {
      const tx = await writeContractAsync({
        address: ContractAddress,
        abi: Abi,
        functionName: "donateToCampaign",
        args: [id],
        value: parseEther(amount),
      });
      await waitForTransactionReceipt(publicClient, {
        hash: tx,
        confirmations: 1,
      });
      addRecentTransaction({
        hash: tx,
        description: "Transaction to donate to a campaign",
      });
      return true;
    } catch (e) {
      toast.error("Error occured while donating");
      return false;
    }
  };

  return (
    <CrownFundContext.Provider
      value={{
        createCampaign,
        donateToCampaign,
      }}
    >
      {children}
    </CrownFundContext.Provider>
  );
};

export const useCampaigns = () => {
  return useReadContract({
    address: ContractAddress,
    abi: Abi,
    functionName: "getCampaign",
  });
};
export const useDonators = (id) => {
  return useReadContract({
    address: ContractAddress,
    abi: Abi,
    functionName: "getDonators",
    args: [id],
  });
};
