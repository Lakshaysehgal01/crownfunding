// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract CrownFund { 
    struct Campaign{
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        address [] donators;
        uint256 amountCollected;
        string image;
        uint256 [] donations;
    }

    mapping(uint256=>Campaign) public campaigns;

    uint256 public TotalNoOfCampaigns=0;

    event CampaignCreated(
    address indexed owner,
    uint256 campaignId,
    string title,
    uint256 target,
    uint256 deadline
    );

    event Donation(
        address indexed donator,
        uint256  amount
    );

    function createCampaign(address _owner,string memory _title,string memory _description,uint256 _target ,uint256 _deadline,string memory _image)public returns(uint256){
        require(_deadline>block.timestamp,"The deadline should be a date in the future");
        Campaign storage campaign=campaigns[TotalNoOfCampaigns];
        campaign.title=_title;
        campaign.description=_description;
        campaign.image=_image;
        campaign.target=_target;
        campaign.amountCollected=0;
        campaign.owner=_owner;
        TotalNoOfCampaigns++;
        emit CampaignCreated(_owner, TotalNoOfCampaigns-1, _title, _target, _deadline);
        return TotalNoOfCampaigns-1;
    }
    function donateToCampaign(uint256 _id)public payable{
        require(msg.value>0,"Please donate more than 0 Eth");
        uint256 amount=msg.value;
        Campaign storage campaign=campaigns[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        payable(campaign.owner).transfer(amount);
        emit Donation(msg.sender, msg.value);
    }
    function getDonators(uint256 _id)public view returns(address[] memory,uint256[] memory ){
        return (campaigns[_id].donators,campaigns[_id].donations);
    }
    function getCampaign()public view returns(Campaign [] memory){
        Campaign [] memory allCampaigns=new Campaign[](TotalNoOfCampaigns);
        for (uint i=0;i<TotalNoOfCampaigns;i++){
            Campaign storage item=campaigns[i];
            allCampaigns[i]=item;
        }
        return allCampaigns;
    }
}
