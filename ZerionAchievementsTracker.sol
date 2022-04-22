pragma solidity ^0.4.17;

contract ERC20 {
    function totalSupply() public constant returns (uint);
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

contract ZerionAchievementsTracker {

    struct Achievement {
        uint256 progressMax;
        address progressTokenAddress;
        bool exist;
    }
    
    address contractOwner;
    mapping(uint16 => Achievement) achievements;
    mapping(address => bool) verified;

    constructor() public  {
        contractOwner = msg.sender;
        addVerifiedAddress(contractOwner);
    }

    function getTokenBalance(address tokenAddress, address addressToCheck) private view returns (uint256 tokenBalance) {
        tokenBalance =  ERC20(tokenAddress).balanceOf(addressToCheck);
    }

    modifier validOwner(address addressToCheck)
    { require(addressToCheck == contractOwner);
      _;
    }

    modifier validVerified(address addressToCheck)
    { require(verified[addressToCheck]);
      _;
    }

    modifier validAchievement(uint16 achievementId)
    { require(achievements[achievementId].exist);
      _;
    }

    function progress(uint16 achievementId, address addressToProgress, uint256 value) public validVerified(msg.sender) validAchievement(achievementId) {
        uint256 currentProgress = getTokenBalance(achievements[achievementId].progressTokenAddress, addressToProgress);
        uint256 delta = achievements[achievementId].progressMax - currentProgress;
        if (delta < value) {
            value = delta;
        }
        if (value != 0) {
            ERC20(achievements[achievementId].progressTokenAddress).transfer(addressToProgress, value);
        }
    }

    function addAchievement(uint16 achievementId, uint256 progressMax, address progressTokenAddress) public validOwner(msg.sender) {
        achievements[achievementId].progressMax = progressMax;
        achievements[achievementId].progressTokenAddress = progressTokenAddress;
        achievements[achievementId].exist = true;
    }

    function addVerifiedAddress(address newVerifiedAddress) public validOwner(msg.sender) {
        verified[newVerifiedAddress] = true;
    }
    
    function checkAchievementProgress(uint16 achievementId, address addressToCheck) public validAchievement(achievementId) view returns (uint256 progressCurrent, uint256 progressMax) {
        progressCurrent = getTokenBalance(achievements[achievementId].progressTokenAddress, addressToCheck);
        progressMax = achievements[achievementId].progressMax;
    }
}




