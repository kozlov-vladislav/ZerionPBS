const ADDRESSS = "0xfA461c4340D3818bC927058241015F8576084f81"

const RPC_URL = "https://ropsten.infura.io/v3/e937f3ae108848daab7b691dfeccece8"

const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "achievementId",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "progressMax",
				"type": "uint256"
			}
		],
		"name": "addAchievement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newVerifiedAddress",
				"type": "address"
			}
		],
		"name": "addVerifiedAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "achievementId",
				"type": "uint16"
			},
			{
				"internalType": "address",
				"name": "addressToProgress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "progress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "achievementId",
				"type": "uint16"
			},
			{
				"internalType": "address",
				"name": "addressToCheck",
				"type": "address"
			}
		],
		"name": "checkAchievementProgress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "progressCurrent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "progressMax",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];