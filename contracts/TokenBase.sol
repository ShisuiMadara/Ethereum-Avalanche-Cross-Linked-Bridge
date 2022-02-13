// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TokenBase is ERC721 {
  address public admin;

  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    admin = msg.sender;
  }

  function updateAdmin(address newAdmin) external {
    require(msg.sender == admin, 'only admin');
    admin = newAdmin;
  }

  function mint(address to, uint amount) external {
    require(msg.sender == admin, 'only admin');
    _mint(to, amount);
  }

  function burn( uint tokenId) external {
    require(msg.sender == admin, 'only admin');
    _burn(tokenId);
  }
}