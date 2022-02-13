const Web3 = require('web3');
const BridgeEth = require('../build/contracts/BridgeEth.json');
const BridgeAva = require('../build/contracts/BridgeAva.json');

const web3Eth = new Web3('http://127.0.0.1:8545');
const web3Ava = new Web3('https://api.avax-test.network/ext/bc/C/rpc');
const adminPrivKey = '0xdef5617edb73ebc41f68a5a7150e620b59a46d7ba36be69d64b9c46bcdeaa16a';
const { address: admin } = web3Ava.eth.accounts.wallet.add(adminPrivKey);

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  BridgeEth.networks['4'].address
);

const bridgeAva = new web3Ava.eth.Contract(
  BridgeAva.abi,
  BridgeAva.networks['97'].address
);

bridgeEth.events.Transfer(
  {fromBlock: 0, step: 0}
)
.on('data', async event => {
  const { from, to, amount, date, nonce, signature } = event.returnValues;

  const tx = bridgeAva.methods.mint(from, to, amount, nonce, signature);
  const [gasPrice, gasCost] = await Promise.all([
    web3Ava.eth.getGasPrice(),
    tx.estimateGas({from: admin}),
  ]);
  const data = tx.encodeABI();
  const txData = {
    from: admin,
    to: bridgeAva.options.address,
    data,
    gas: gasCost,
    gasPrice
  };
  const receipt = await web3Ava.eth.sendTransaction(txData);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`
    Processed transfer:
    - from ${from} 
    - to ${to} 
    - amount ${amount} tokens
    - date ${date}
    - nonce ${nonce}
  `);
});