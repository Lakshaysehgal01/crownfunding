# CrownFund Smart Contract

CrownFund is a simple crowdfunding smart contract written in Solidity. It allows users to create fundraising campaigns, donate to campaigns, and retrieve campaign and donation information.

## Features

- **Create Campaigns:** Anyone can create a new campaign with a title, description, target amount, deadline, and image.
- **Donate to Campaigns:** Users can donate ETH to any campaign.
- **Track Donators:** Each campaign keeps track of all donators and their donation amounts.
- **Retrieve Campaigns:** Fetch all campaigns and their details.

## Contract Overview

### Campaign Structure

Each campaign contains:

- `owner`: Address of the campaign creator
- `title`: Title of the campaign
- `description`: Description of the campaign
- `target`: Target fundraising amount (in wei)
- `deadline`: Campaign deadline (timestamp)
- `donators`: List of addresses who donated
- `amountCollected`: Total amount collected (in wei)
- `image`: Image URL or IPFS hash
- `donations`: List of donation amounts

### Main Functions

- `createCapaign(address _owner, string _title, string _description, uint256 _target, uint256 _deadline, string _image)`: Creates a new campaign. Returns the campaign ID.
- `donateToCampaign(uint256 _id)`: Donate ETH to a campaign by ID.
- `getDonators(uint256 _id)`: Returns the list of donators and their donation amounts for a campaign.
- `getCampaign()`: Returns all campaigns.

## Usage

1. **Deploy the contract** to an Ethereum-compatible network.
2. **Create a campaign** by calling `createCapaign` with the required parameters.
3. **Donate** to a campaign by calling `donateToCampaign` and sending ETH.
4. **View donators** and **campaigns** using `getDonators` and `getCampaign`.

## Notes

- The contract does not include advanced features like refunds or campaign completion checks.
- The deadline check in `createCapaign` currently requires the deadline to be in the past, which may be a bug (should be `> block.timestamp`).

## License

This project is licensed under the Unlicense.
