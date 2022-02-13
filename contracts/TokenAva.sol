// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './TokenBase.sol';


contract TokenAva is TokenBase {
  constructor() TokenBase('Avalanche Token', 'ATK') {}
}