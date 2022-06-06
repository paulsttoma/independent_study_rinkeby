import React from "react";
import { Navbarstyle } from "./styles/Navbar.styles";
import { useState } from "react";



function Navbar() {

  const[vote1, setVote1] = useState(0);
  const[vote2, setVote2] = useState(0);

  const Web3 = require("web3");
  const web3 = new Web3(window.ethereum);
  const [addr, setAddr] = useState("");

  const abi = [
    {
      "inputs": [],
      "name": "votep1",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votep2",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getP1",
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
      "name": "getP2",
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
      "name": "P1",
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
      "name": "P2",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  const address = "0x98C2FC9e9FE69b0d00Fc6a70347D93C0D5FE48b6";
  const contract = new web3.eth.Contract(abi, address);


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


  function getp1() {
    contract.methods.getP1().call().then(value => setVote1(value));
  }

  function getp2() {
    contract.methods.getP2().call().then(value => setVote2(value));
  }

  function votep1() {
    contract.methods.votep1().send({from: "0x37AC319bE8cd4778D88B3a3eF17bF59157E37279", gas: 3000000, gasPrice: 3000,});
  }

  function votep2() {
    contract.methods.votep2().send({from: "0x37AC319bE8cd4778D88B3a3eF17bF59157E37279", gas: 3000000, gasPrice: 3000,});
  }



  window.setInterval(getp1, 100);
  window.setInterval(getp2, 100);


  return (
    <div>
      <Navbarstyle>
        <button  className="metamaskbutton" onClick={metamask} button> Connect Metamask </button>
        <button  className="votep1" onClick={votep1} button> votep1 </button>
        <button  className="votep2" onClick={votep2} button> votep2 </button>
        <p className="getp1">{vote1}</p>
        <p className="getp2">{vote2}</p>
        <p> <b>Connected Public Address:</b> {addr} </p>
      </Navbarstyle>
    </div>
  );
}

export default Navbar;
