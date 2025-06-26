import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'CrownFunding',
    projectId: import.meta.env.VITE_PROJECT_ID,
    chains: [sepolia],
});
