import { ContractAbi} from 'web3x-es/contract';
export default new ContractAbi([
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_converter",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_collector",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_adapderFee",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "previousFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newFee",
        "type": "uint256"
      }
    ],
    "name": "AdapterFeeChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "registry",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "marketplace",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "orderValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "orderFees",
        "type": "uint256"
      }
    ],
    "name": "ExecutedOrder",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "marketplace",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "orderValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "orderFees",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "marketplaceData",
        "type": "bytes"
      }
    ],
    "name": "ExecutedOrder",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "collector",
        "type": "address"
      }
    ],
    "name": "FeesCollectorChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "marketplace",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "value",
        "type": "bool"
      }
    ],
    "name": "MarketplaceAllowance",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "converter",
        "type": "address"
      }
    ],
    "name": "SetConverter",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "ADAPTER_FEE_MAX",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ADAPTER_FEE_PRECISION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "adapterFeesCollector",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "adapterTransactionFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ITransferableRegistry",
        "name": "_registry",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_marketplace",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_encodedCallData",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_orderAmount",
        "type": "uint256"
      },
      {
        "internalType": "enum BuyAdapter.TransferType",
        "name": "_transferType",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "_beneficiary",
        "type": "address"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ITransferableRegistry",
        "name": "_registry",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_marketplace",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_encodedCallData",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_orderAmount",
        "type": "uint256"
      },
      {
        "internalType": "contract IERC20",
        "name": "_paymentToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_maxPaymentTokenAmount",
        "type": "uint256"
      },
      {
        "internalType": "enum BuyAdapter.TransferType",
        "name": "_transferType",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "_beneficiary",
        "type": "address"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_marketplace",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_encodedCallData",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_orderAmount",
        "type": "uint256"
      },
      {
        "internalType": "contract IERC20",
        "name": "_paymentToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_maxPaymentTokenAmount",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_marketplace",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_encodedCallData",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_orderAmount",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "converterAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_transactionFee",
        "type": "uint256"
      }
    ],
    "name": "setAdapterFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_converter",
        "type": "address"
      }
    ],
    "name": "setConverter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_collector",
        "type": "address"
      }
    ],
    "name": "setFeesCollector",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]);
