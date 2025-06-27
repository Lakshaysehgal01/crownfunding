import { createContext, useContext } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { toast } from "sonner";
import { Abi } from "../utils/ABI";
const ContarctAddress = import.meta.env.VITE_CONTARCT_ADDRESS;
export const CrownFundContext = createContext();

export const CrownFundProvider = ({ children }) => {
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  const createCampaign = async (form) => {
    console.log("before tx");
    try {
      const tx = await writeContractAsync({
        address: ContarctAddress,
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
      console.log(tx);
    } catch (e) {
      toast.error(e);
    }
  };
  return (
    <CrownFundContext.Provider
      value={{
        createCampaign,
      }}
    >
      {children}
    </CrownFundContext.Provider>
  );
};
