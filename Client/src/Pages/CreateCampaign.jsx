import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Components/FormField";
import { money } from "../assets";
import CustomButton from "../Components/CustomButton";
import { CrownFundContext } from "../Context/CrownFund";
import { parseEther } from "viem";
import { checkIfImage } from "../utils";
import { toast } from "sonner";
import Loader from "../Components/Loader";
import { useAccount } from "wagmi";
function CreateCampaign() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });
  const { address } = useAccount();
  const navigate = useNavigate();
  const { createCampaign } = useContext(CrownFundContext);
  const handleFormFieldChange = (name, e) => {
    setForm({ ...form, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address) {
      toast.info("Please Connect Wallet");
      return;
    }
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({ ...form, target: parseEther(form.target) });
        setIsLoading(false);
        navigate("/");
      } else {
        toast.error("Please provide Valid Image");
        setForm({ ...form, image: "" });
      }
    });
  };
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>
      <form className="w-full mt-[65px] flex flex-col gap-7">
        <div className="flex flex-wrap gap-10">
          <FormField
            labelName={"Your Name *"}
            placeholder={"John Doe"}
            inputType={"text"}
            value={form.name}
            handleChange={(e) => {
              handleFormFieldChange("name", e);
            }}
          />
          <FormField
            labelName={"Campaign Title"}
            placeholder={"Write a Title"}
            inputType={"text"}
            value={form.title}
            handleChange={(e) => {
              handleFormFieldChange("title", e);
            }}
          />
        </div>
        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />
        <div className="w-full flex justify-center items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain"
          />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
            You will get 100% of the raised amount{" "}
          </h4>
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="number"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>
        <FormField
          labelName="Campaign image *"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            type={"submit"}
            title={"Submit new Campaign"}
            style={"bg-[#1dc071]"}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateCampaign;
