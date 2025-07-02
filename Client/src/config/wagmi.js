import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'CrownFunding',
    projectId: import.meta.env.VITE_PROJECT_ID,
    chains: [sepolia],
});

export const publicClient = createPublicClient({
    chain: sepolia,
    transport: http("https://eth-sepolia.g.alchemy.com/v2/3n0KHKWb9w7ii4DRz6KajPQUrrkcQLHM"),
});