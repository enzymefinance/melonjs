import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const KyberNetworkInterfaceAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'trader',
        type: 'address',
      },
      {
        name: 'src',
        type: 'address',
      },
      {
        name: 'srcAmount',
        type: 'uint256',
      },
      {
        name: 'dest',
        type: 'address',
      },
      {
        name: 'destAddress',
        type: 'address',
      },
      {
        name: 'maxDestAmount',
        type: 'uint256',
      },
      {
        name: 'minConversionRate',
        type: 'uint256',
      },
      {
        name: 'walletId',
        type: 'address',
      },
      {
        name: 'hint',
        type: 'bytes',
      },
    ],
    name: 'tradeWithHint',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'enabled',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'maxGasPrice',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserCapInWei',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'src',
        type: 'address',
      },
      {
        name: 'dest',
        type: 'address',
      },
      {
        name: 'srcQty',
        type: 'uint256',
      },
    ],
    name: 'getExpectedRate',
    outputs: [
      {
        name: 'expectedRate',
        type: 'uint256',
      },
      {
        name: 'slippageRate',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getUserCapInTokenWei',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'info',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];