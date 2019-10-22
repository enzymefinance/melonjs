import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const FundFactoryAbi = [
  {
    constant: false,
    inputs: [],
    name: 'createTrading',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'childExists',
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
    constant: false,
    inputs: [],
    name: 'createPolicyManager',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'participationFactory',
    outputs: [
      {
        name: '',
        type: 'address',
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
        name: 'withId',
        type: 'uint256',
      },
    ],
    name: 'getFundById',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'createAccounting',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'priceSource',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getLastFundId',
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
    inputs: [],
    name: 'feeManagerFactory',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'tradingFactory',
    outputs: [
      {
        name: '',
        type: 'address',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'managersToRoutes',
    outputs: [
      {
        name: 'accounting',
        type: 'address',
      },
      {
        name: 'feeManager',
        type: 'address',
      },
      {
        name: 'participation',
        type: 'address',
      },
      {
        name: 'policyManager',
        type: 'address',
      },
      {
        name: 'shares',
        type: 'address',
      },
      {
        name: 'trading',
        type: 'address',
      },
      {
        name: 'vault',
        type: 'address',
      },
      {
        name: 'priceSource',
        type: 'address',
      },
      {
        name: 'registry',
        type: 'address',
      },
      {
        name: 'version',
        type: 'address',
      },
      {
        name: 'engine',
        type: 'address',
      },
      {
        name: 'mlnToken',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'createFeeManager',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'version',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'accountingFactory',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'createVault',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_child',
        type: 'address',
      },
    ],
    name: 'isInstance',
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
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getExchangesInfo',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        type: 'address',
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
        name: '',
        type: 'uint256',
      },
    ],
    name: 'funds',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'createParticipation',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'mlnToken',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'completeSetup',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_name',
        type: 'string',
      },
      {
        name: '_fees',
        type: 'address[]',
      },
      {
        name: '_feeRates',
        type: 'uint256[]',
      },
      {
        name: '_feePeriods',
        type: 'uint256[]',
      },
      {
        name: '_exchanges',
        type: 'address[]',
      },
      {
        name: '_adapters',
        type: 'address[]',
      },
      {
        name: '_denominationAsset',
        type: 'address',
      },
      {
        name: '_defaultAssets',
        type: 'address[]',
      },
    ],
    name: 'beginSetup',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'managersToHubs',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'engine',
    outputs: [
      {
        name: '',
        type: 'address',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'managersToSettings',
    outputs: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'denominationAsset',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'vaultFactory',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'sharesFactory',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'createShares',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'policyManagerFactory',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_accountingFactory',
        type: 'address',
      },
      {
        name: '_feeManagerFactory',
        type: 'address',
      },
      {
        name: '_participationFactory',
        type: 'address',
      },
      {
        name: '_sharesFactory',
        type: 'address',
      },
      {
        name: '_tradingFactory',
        type: 'address',
      },
      {
        name: '_vaultFactory',
        type: 'address',
      },
      {
        name: '_policyManagerFactory',
        type: 'address',
      },
      {
        name: '_version',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'manager',
        type: 'address',
      },
      {
        indexed: true,
        name: 'hub',
        type: 'address',
      },
      {
        indexed: false,
        name: 'routes',
        type: 'address[12]',
      },
    ],
    name: 'NewFund',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'hub',
        type: 'address',
      },
      {
        indexed: true,
        name: 'instance',
        type: 'address',
      },
    ],
    name: 'NewInstance',
    type: 'event',
  },
] as AbiItem[];