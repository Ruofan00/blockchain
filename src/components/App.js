// import React, { Component } from 'react'
// import Web3 from 'web3'
// import DaiToken from '../abis/DaiToken.json'
// import DappToken from '../abis/DappToken.json'
// import TokenFarm from '../abis/TokenFarm.json'
import Navbar from './Navbar';
import eth from '../eth-logo.png';
// import Main from './Main'


// class App extends Component {

//   async componentWillMount() {
//     await this.loadWeb3()
//     await this.loadBlockchainData()
//   }

//   async loadBlockchainData() {
//     const web3 = window.web3

//     const accounts = await web3.eth.getAccounts()
//     this.setState({ account: accounts[0] })

//     const networkId = await web3.eth.net.getId()

//     // Load DaiToken
//     const daiTokenData = DaiToken.networks[networkId]
//     if(daiTokenData) {
//       const daiToken = new web3.eth.Contract(DaiToken.abi, daiTokenData.address)
//       this.setState({ daiToken })
//       let daiTokenBalance = await daiToken.methods.balanceOf(this.state.account).call()
//       this.setState({ daiTokenBalance: daiTokenBalance.toString() })
//     } else {
//       window.alert('DaiToken contract not deployed to detected network.')
//     }

//     // Load DappToken
//     const dappTokenData = DappToken.networks[networkId]
//     if(dappTokenData) {
//       const dappToken = new web3.eth.Contract(DappToken.abi, dappTokenData.address)
//       this.setState({ dappToken })
//       let dappTokenBalance = await dappToken.methods.balanceOf(this.state.account).call()
//       this.setState({ dappTokenBalance: dappTokenBalance.toString() })
//     } else {
//       window.alert('DappToken contract not deployed to detected network.')
//     }

//     // Load TokenFarm
//     const tokenFarmData = TokenFarm.networks[networkId]
//     if(tokenFarmData) {
//       const tokenFarm = new web3.eth.Contract(TokenFarm.abi, tokenFarmData.address)
//       this.setState({ tokenFarm })
//       let stakingBalance = await tokenFarm.methods.stakingBalance(this.state.account).call()
//       this.setState({ stakingBalance: stakingBalance.toString() })
//     } else {
//       window.alert('TokenFarm contract not deployed to detected network.')
//     }

//     this.setState({ loading: false })
//   }

//   async loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum)
//       await window.ethereum.enable()
//     }
//     else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider)
//     }
//     else {
//       window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
//     }
//   }

//   stakeTokens = (amount) => {
//     this.setState({ loading: true })
//     this.state.daiToken.methods.approve(this.state.tokenFarm._address, amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
//       this.state.tokenFarm.methods.stakeTokens(amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
//         this.setState({ loading: false })
//       })
//     })
//   }

//   unstakeTokens = (amount) => {
//     this.setState({ loading: true })
//     this.state.tokenFarm.methods.unstakeTokens().send({ from: this.state.account }).on('transactionHash', (hash) => {
//       this.setState({ loading: false })
//     })
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       account: '0x0',
//       daiToken: {},
//       dappToken: {},
//       tokenFarm: {},
//       daiTokenBalance: '0',
//       dappTokenBalance: '0',
//       stakingBalance: '0',
//       loading: true
//     }
//   }

//   render() {
//     let content
//     if(this.state.loading) {
//       content = <p id="loader" className="text-center">Loading...</p>
//     } else {
//       content = <Main
//         daiTokenBalance={this.state.daiTokenBalance}
//         dappTokenBalance={this.state.dappTokenBalance}
//         stakingBalance={this.state.stakingBalance}
//         stakeTokens={this.stakeTokens}
//         unstakeTokens={this.unstakeTokens}
//       />
//     }

//     return (
//       <div>
//         <Navbar account={this.state.account} />
//         <div className="container-fluid mt-5">
//           <div className="row">
//             <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
//               <div className="content mr-auto ml-auto">
//                 <a
//                   href="http://www.dappuniversity.com/bootcamp"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                 </a>

//                 {content}

//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
// import daiLogo from '../dai-logo.png';
import './App.css';
import Web3 from 'web3';
// import DaiTokenMock from '../abis/DaiTokenMock.json';
//import Messenger from '../abis/Messenger.json';
//import User2Contract from '../abis/User2Contract.json';
import User2Contract from '../abis/test.json';
import Messenger from '../abis/mess.json';

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }



  //interact with smart contract
  async loadBlockchainData() {
    const web3 = window.web3;
    //const web3 = new Web3(web3.currentProvider);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    this.setState({ account: accounts[0] });
    var abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getMessenger",
    "outputs": [
      {
        "internalType": "contract Messenger",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "init",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
    var contract = new web3.eth.Contract(abi,"0x47e44d42CefCBb1B6188324F7586C19119b65225");

    
    contract.methods.getMessenger("0xBA7552924a31a9614c2d0615B62409a6501d6D17").call().then(function(data){
      console.log(data);
      var messenger = new web3.eth.Contract(Messenger,data);
      messenger.methods.getBalance().call().then(function(b) {
        console.log("balance1",b);
      });
    
      messenger.methods.deposit().send({
        from: "0xBA7552924a31a9614c2d0615B62409a6501d6D17",
        value:10
      }).then(function() {
        messenger.methods.getBalance().call().then(function(b) {
        console.log("balance2",b);
      });
      });
      // });
    });
    
    //this.setState({balance:leftEther});
   // const daiTokenAddress = "0x7b729B07EcBDEd8879Acf997aAF6546926982830";// Replace DAI Address Here
   // const daiTokenMock = new web3.eth.Contract(DaiTokenMock.abi, daiTokenAddress);
   // this.setState({ daiTokenMock: daiTokenMock });
   // const balance = await daiTokenMock.methods.balanceOf(this.state.account).call();
   // this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') });
   // const transactions = await daiTokenMock.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: this.state.account } });
   // this.setState({ transactions: transactions });
    //console.log(transactions)
  }

  transfer(recipient, amount) {
    this.state.daiTokenMock.methods.transfer(recipient, amount).send({ from: this.state.account })
  }

  async showAccount() {
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      contractAccount:'',
     // daiTokenMock: null,
      balance: 0,
      transactions: []
    }

    this.transfer = this.transfer.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto" style={{ width: "500px" }}>
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={eth} width="150" />
                </a>
                <h1>{this.state.balance} ETH</h1>
                <form onSubmit={(event) => {
                  event.preventDefault();
                  const recipient = this.recipient.value;
                  const amount = window.web3.utils.toWei(this.amount.value, 'Ether');
                  this.transfer(recipient, amount)
                }}>
                  <div className="form-group mr-sm-2">
                    <input
                      id="recipient"
                      type="text"
                      ref={(input) => { this.recipient = input }}
                      className="form-control"
                      placeholder="Recipient Address"
                      required />
                  </div>
                  <div className="form-group mr-sm-2">
                    <input
                      id="amount"
                      type="text"
                      ref={(input) => { this.amount = input }}
                      className="form-control"
                      placeholder="Amount"
                      required />
                  </div>
                  <button type="submit" style = {{border:"0",color:"white",backgroundColor:"rgb(221, 160, 221)"}} className="btn btn-block">Send</button>
                  <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}>
                WITHDRAW...
              </button>
                </form>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Recipient</th>
                      <th scope="col">value</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.transactions.map((tx, key) => {
                      return (
                        <tr key={key} >
                          <td>{tx.returnValues.to}</td>
                          <td>{window.web3.utils.fromWei(tx.returnValues.value.toString(), 'Ether')}</td>
                          <td>Recover</td>
                        </tr>
                      )
                    }) }
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
