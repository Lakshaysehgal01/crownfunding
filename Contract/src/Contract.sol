// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract Contract { 
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
}
