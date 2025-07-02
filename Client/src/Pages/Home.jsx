import { useEffect, useState } from "react";
import { useCampaigns } from "../Context/CrownFund";
import { useAccount } from "wagmi";
import { formatEther } from "viem";
import DisplayCampaign from "../Components/DisplayCampaign";

function Home() {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address } = useAccount();
  const { data, isLoading, error } = useCampaigns();
  useEffect(() => {
    if (data) {
      setLoading(true);
      const parseData = data.map((campaign, id) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: formatEther(BigInt(campaign.target)),
        deadline: Number(campaign.deadline),
        amountCollected: formatEther(BigInt(campaign.amountCollected)),
        image: campaign.image,
        pId: id,
      }));
      setCampaigns(parseData);
      setLoading(false);
    }
  }, [data, address]);
  return (
    <DisplayCampaign
      isLoading={loading}
      title={"All Campaigns"}
      campaigns={campaigns}
    />
  );
}

export default Home;
