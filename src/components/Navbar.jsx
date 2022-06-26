import React from "react";
import { Navbarstyle } from "./styles/Navbar.styles";
import { useState } from "react";
import {Basestyle} from "./styles/Base.styles";
import Img1 from "../images/p1.png";
import Img2 from "../images/p2.png";
import etherscan from "../images/logos/etherscan-logo-circle.png";
import {Eth} from "./styles/Navbar.styles";
import { Sticker } from "./styles/Navbar.styles";
import opensea from "../images/logos/dddd.png";
import { Opensea } from "./styles/Navbar.styles";




 function Navbar() {

  const Web3 = require("web3");
  const web3 = new Web3(window.ethereum);
  const [addr, setAddr] = useState("");

  const[vote1, setVote1] = useState(0);
  const[vote2, setVote2] = useState(0);


  const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "AbrahamLincoln",
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
      "name": "TheodoreRoosevelt",
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
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
      "name": "get_AbrahamLincoln",
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
      "name": "get_TheodoreRoosevelt",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "safeMint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
    },
    {
      "inputs": [],
      "name": "vote_AbrahamLincoln",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vote_TheodoreRoosevelt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];


  const contract_address = "0x926BEf50fa098708B4CD66Db8e2c1eaacCe50370";
  const contract = new web3.eth.Contract(abi, contract_address);


  function getp1() {
    contract.methods.get_TheodoreRoosevelt().call().then(value => setVote1(value));
  }

  function getp2() {
    contract.methods.get_AbrahamLincoln().call().then(value => setVote2(value));
  }

  function votep1() {
    contract.methods.vote_TheodoreRoosevelt().send({from: addr, gas: 3000000, gasPrice: 3000,});
  }

  function votep2() {
    contract.methods.vote_AbrahamLincoln().send({from: addr, gas: 3000000, gasPrice: 3000,});
  }

  function getstick(){

    contract.methods.safeMint(addr).send({ from: addr, value: "00000000000000000", gas: 3000000 });

  }

  window.setInterval(getp1, 100);
  window.setInterval(getp2, 100);
  

  function metamask() {

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      window.ethereum.on("accountsChanged", function(accounts) {setAddr(accounts[0]);});
    } 
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } 
    else {
      window.alert("Should it connect?");
    }
    window.ethereum.enable()
  }


  return (
    <div>
      <Navbarstyle>
        <button  className="metamaskbutton" onClick={metamask} button> Connect Metamask </button>
        <p><b>Connected Public Address:</b> {addr} </p>
        <h1 className="title-page"> 2024 Presidential Election </h1>
      </Navbarstyle>

      <Basestyle>
      <div className="container-one">
        <p className="getp1"> Number of Votes:  <b>{vote1}</b></p>
        <img className="p1" src={Img1} alt = "p1"/>
        <button className="button-one" onClick={votep1} button> Vote for Theodore Roosevelt  </button>
      </div>

      <div className="container-two">
        <p className="getp2"> Number of Votes: <b>{vote2}</b></p>
        <img className="p2" src={Img2} alt = "p2" />
        <button  className="button-two" onClick={votep2} button> Vote for Abraham Lincoln </button>
      </div>
      </Basestyle>

      <Eth>
        <div>
          <a href="https://rinkeby.etherscan.io/address/0x926BEf50fa098708B4CD66Db8e2c1eaacCe50370"> <img src={etherscan} alt = "etherscan" /></a>
        </div>
      </Eth>

      <div> 
        <Sticker>
        <button className="stick" onClick={getstick}> Get Sticker NFT </button>
        </Sticker>
         </div>

         <div>

          <Opensea>
          <a href="https://testnets.opensea.io/collection/vote-independent-study"> <img src={opensea} alt = "etherscan" /></a>
         </Opensea>

         </div>
    </div>
  );
}

export default Navbar;
