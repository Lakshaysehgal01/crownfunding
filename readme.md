# CrownFunding

CrownFunding is a decentralized crowdfunding platform built on Ethereum. It enables users to create fundraising campaigns, donate ETH to causes, and track campaign progress transparently on-chain.

## Features

- **Create Campaigns:** Start a new campaign with a title, description, target amount, deadline, and image.
- **Donate to Campaigns:** Support campaigns by donating ETH directly from your wallet.
- **View Campaigns:** Browse all campaigns, see details, and track progress.
- **Campaign Details:** View campaign story, creator, amount raised, deadline, and list of donators.
- **Wallet Integration:** Connect your Ethereum wallet using RainbowKit and interact with the smart contract via wagmi.
- **Live Feedback:** Get instant notifications for actions and transactions.

## Tech Stack

- **Smart Contract:** Solidity (see `Contract/src/Contract.sol`)
- **Frontend:** React, Vite, Tailwind CSS
- **Web3 Integration:** wagmi, viem, RainbowKit

## Project Structure

- `Contract/` – Solidity smart contract and tests
- `Client/` – React frontend DApp

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Lakshaysehgal01/crownfunding.git
   cd crownfunding
   ```
2. **Deploy the contract:**
   - Navigate to `Contract/` and deploy `Contract.sol` to your preferred Ethereum testnet.
3. **Configure the frontend:**
   - In `Client/`, create a `.env` file and set your deployed contract address:
     ```env
     VITE_CONTARCT_ADDRESS=your_contract_address_here
     ```
4. **Install dependencies and run the app:**
   ```bash
   cd Client
   npm install
   npm run dev
   ```
5. **Connect your wallet** and start using CrownFunding!

## License

This project is licensed under the Unlicense.
