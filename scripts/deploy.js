async function main() {
  // Constructor argument...
  const baseTokenURI = "ipfs://something";

  // We get the contract to deploy
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  console.log("Deploying contract...");

  // Start deployment, return promise that resolves to contract obj
  const example = await ExampleNFT.deploy(baseTokenURI);
  await example.deployed();
  console.log("ExampleNFT deployed to:", example.address);

  console.log("Cooling down for 10 seconds to confirm blocks...");

  // Wait a bunch of time for etherscan's sensitive api calls
  await new Promise((resolve) => setTimeout(resolve, 60000));

  // Verify after deploying
  await hre.run("verify:verify", {
    address: example.address,
    constructorArguments: [baseTokenURI],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
