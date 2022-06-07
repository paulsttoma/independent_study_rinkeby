import React from "react";
import { Navbarstyle } from "./styles/Navbar.styles";
import { useState } from "react";
import {Basestyle} from "./styles/Base.styles";
import Img1 from "../images/p1.png";
import Img2 from "../images/p2.png";



 function Navbar() {

  const Web3 = require("web3");
  const web3 = new Web3(window.ethereum);
  const [addr, setAddr] = useState("");

  const[vote1, setVote1] = useState(0);
  const[vote2, setVote2] = useState(0);


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


  const address = "0x035d8B9C7A0D3efD465f609B5E090F2BC1c1C481";
  const contract = new web3.eth.Contract(abi, address);


  function getp1() {
    contract.methods.getP1().call().then(value => setVote1(value));
  }

  function getp2() {
    contract.methods.getP2().call().then(value => setVote2(value));
  }

  function votep1() {
    contract.methods.votep1().send({from: addr, gas: 3000000, gasPrice: 3000,});
  }

  function votep2() {
    contract.methods.votep2().send({from: addr, gas: 3000000, gasPrice: 3000,});
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
        <button className="button-one" onClick={votep1} button> Vote for Theodore Roosevelt </button>
      </div>

      <div className="container-two">
        <p className="getp2"> Number of Votes: <b>{vote2}</b></p>
        <img className="p2" src={Img2} alt = "p2" />
        <button  className="button-two" onClick={votep2} button> Vote for Abraham Lincoln </button>
      </div>
      </Basestyle>
    </div>
  );
}

export default Navbar;
