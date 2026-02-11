import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const SEPOLIA_URL = process.env.SEPOLIA_URL || "";
const ARC_URL = process.env.ARC_URL || "";
const LISK_URL = process.env.LISK_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `${SEPOLIA_URL}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    arc: {
      url: `${process.env.ARC_URL}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    lisk: {
      url: `${process.env.LISK_URL}`,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`,
  },
};

export default config;
