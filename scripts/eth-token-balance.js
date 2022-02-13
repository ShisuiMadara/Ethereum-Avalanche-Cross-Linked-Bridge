const TokenAva = artifacts.require('./TokenAva.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const tokenAva = await TokenAva.deployed();
  const balance = await tokenAva.balanceOf(recipient);
  console.log(balance.toString());
  done();
}