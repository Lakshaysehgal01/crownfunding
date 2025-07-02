# CrownFund Client

A modern crowdfunding DApp built with React, Vite, Tailwind CSS, and wagmi, enabling users to create, view, and fund campaigns on Ethereum-compatible networks.

## Features

- **Create Campaigns:** Start a new fundraising campaign with a title, description, target amount, deadline, and image.
- **View Campaigns:** Browse all campaigns or filter by your own profile.
- **Fund Campaigns:** Donate ETH to campaigns directly from the UI.
- **Campaign Details:** View campaign progress, story, donators, and contribute.
- **Wallet Integration:** Connect your wallet using RainbowKit and interact with smart contracts via wagmi.
- **Live Feedback:** Get instant feedback on actions with toast notifications.

## Tech Stack

- **React 19**
- **Vite** for fast development
- **Tailwind CSS** for styling
- **wagmi** & **viem** for Ethereum contract interaction
- **RainbowKit** for wallet connection
- **React Router** for navigation
- **Sonner** for notifications

## Project Structure

- `src/Components/` – UI components (Navbar, Sidebar, FundCard, etc.)
- `src/Pages/` – Main pages (Home, CreateCampaign, Campaign-detail, Profile)
- `src/Context/CrownFund.jsx` – Context provider for contract actions
- `src/utils/` – Utility functions and ABI
- `src/config/` – wagmi and network config

## How It Works

- **Campaigns** are stored on-chain via the CrownFund smart contract.
- Users can **create** and **fund** campaigns from the UI.
- All campaign and donation data is fetched live from the blockchain.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment:**
   - Create a `.env` file with your contract address:
     ```env
     VITE_CONTARCT_ADDRESS=your_contract_address_here
     ```
3. **Run the app:**
   ```bash
   npm run dev
   ```
4. **Connect your wallet** and start using the DApp!

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run lint` – Lint code
- `npm run preview` – Preview production build

## Notes

- Make sure your wallet is connected to the correct network.
- The contract address must match the deployed CrownFund contract.

## License

This project is licensed under the Unlicense.
