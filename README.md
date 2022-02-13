# Ethereum-Avalanche-Cross-Linked-Bridge

<p>The uncentralised bridge is based on ERC721 token allowing the user to trade between the two chains.</p>
<p>
  The software requires the node address in each of the test net, along with ganache for locally creating an Ethereum development environment
  </p>

<h2><strong>Dependencies</strong></h2>
<ul>
  <li>Web3</li>
  <li>@openzeppelin/contracts</li>
  <li>@openzeppelin/upgrades</li>
  <li>@truffle/hdwallet-provider</li>
  <li>node</li>
  <li>express</li>
 </ul>
 
 
 <h2><strong>Getting Started</strong></h2>
 
 This will provide the mnemonic along with accounts and private key
 
 Initialise truffle using
 <br>
 ```truffle init ```
 
 To install and use ganache
 <br>
  ```
  npm install -g ganache
  ganache
  
  ```
 
 To deploy on the Ethereum Test Net, 
 <br>
 ```truffle migrate --reset --network ethTestnet```
 
 To deploy on the Avalanche Test Net,
 <br>
 ```truffle migrate --reset --network avaTestnet```
  
