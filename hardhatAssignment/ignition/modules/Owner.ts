// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://v2.hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ownerModule = buildModule("OwnerModule", (m) => {
  const owner = m.contract("Owner");
  // const greeter = m.contract("Greeter");

  return { owner };
});

export default ownerModule;
