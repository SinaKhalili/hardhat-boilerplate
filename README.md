# Hardhat boilerplate

This is my personal hardhat boilerplate, that does what I basically want
for every project setup:

1. Add the [open zeppelin contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
2. Add the [hardhat verification plugin](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html)
3. Use `dotenv`
4. A sensible `.gitignore`
5. A `scripts` and `contracts` directory
6. A `tests` directory for testing
7. Just kidding I don't write tests
8. A Makefile, so I don't have to remember the hardhat commands

I know I should probably just use a `yarn` script in `package.json`,
but I like Makefiles, so I added a `Makefile`.

## Usage

You need to add a `.env` file at the root, with the following info:

- `API_URL="https://eth-rinkeby.alchemyapi.io/v2/..."`: Your API for calling the blockchain
- `PRIVATE_KEY="0x3...32"`: The private key of the account deploying the contract
- `ETHERSCAN_KEY="..."`: You Etherscan API key, for verifying the contract. You can grab this from the etherscan website and signing in.

## Possible modifications

If waiting 60 seconds for the etherscan verification is annoying, you can make a
separate script to deploy without verifying, and use that for testing.
