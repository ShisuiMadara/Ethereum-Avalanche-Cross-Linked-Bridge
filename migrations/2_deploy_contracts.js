const TokenEth = artifacts.require('TokenEth.sol');
const TokenAva = artifacts.require('TokenAva.sol');
const BridgeEth = artifacts.require('BridgeEth.sol');
const BridgeAva = artifacts.require('BridgeAva.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'ethTestnet') {
    await deployer.deploy(TokenEth);
    const tokenEth = await TokenEth.deployed();
    await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeEth, tokenEth.address);
    const bridgeEth = await BridgeEth.deployed();
    await tokenEth.updateAdmin(bridgeEth.address);
  }
  if(network === 'avaTestnet') {
    await deployer.deploy(TokenAva);
    const tokenAva = await TokenAva.deployed();
    await deployer.deploy(BridgeAva, tokenAva.address);
    const bridgeAva = await BridgeAva.deployed();
    await tokenAva.updateAdmin(bridgeAva.address);
  }
};