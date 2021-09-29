/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

// Put these environment variables in a file at the root called .env,
// in the format like:
// API_URL="https://eth-rinkeby.alchemyapi.io/v2/..."
// PRIVATE_KEY="0x3...32"
// ETHERSCAN_KEY="..."

const { API_URL, PRIVATE_KEY, ETHERSCAN_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
