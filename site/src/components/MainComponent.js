import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { ACHIEVEMENTS } from '../shared/achievement';
import { STATS } from '../shared/stats'
import {ADDRESS, ABI, RPC_URL} from '../shared/smart_contract'
import Result from './ResultComponent';
import Search from './SearchComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      achievements: ACHIEVEMENTS,
      stats: STATS,
      choosen: JSON.parse(localStorage.getItem('choosen')) || "default",
      rpcURL : RPC_URL,
      abi : ABI,
      address : ADDRESS
    };
  }
  
  render() {
    const SearchPage = () => {
      return(
          <Search saveAddress = {(address) =>  {this.state.choosen = address; localStorage.setItem('choosen', JSON.stringify(this.state.choosen)); } }/>
      );
    }
    const isAchieved = ({address, achievementId}) => {
      /*const rpcURL = this.state.rpcURL;
      const web3 = new Web3(rpcURL);


      const contract = new web3.eth.Contract(this.state.abi, this.state.address);

      contract.methods.checkAchievementProgress(`${achievementId}, ${address}`).call((err, result) => { console.log(result) });
*/
      return true;
    }
    return (
      <div>
        <Switch>
              <Route path='/search' component={SearchPage} />
              <Route exact path='/results' component={() => <Result achievements={this.state.achievements} choosenAddress = {this.state.choosen} isAchieved={isAchieved} stats = {this.state.stats}/>} />
              <Redirect to="/search" />
        </Switch>
      </div>
    );
  }
}

export default Main;