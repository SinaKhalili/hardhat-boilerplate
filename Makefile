all:
	npx hardhat run scripts/deploy.js

rinkeby:
	npx hardhat run scripts/deploy.js --network rinkeby

clean:
	rm -r artifacts cache