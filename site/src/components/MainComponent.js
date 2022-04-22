import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { ACHIEVEMENTS } from '../shared/achievement';
import Result from './ResultComponent';
import Search from './SearchComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      achievements: ACHIEVEMENTS,
      choosen: 'default'
    };
  }
  
  render() {
    const SearchPage = () => {
      return(
          <Search saveAddress = {(address) => this.state.choosen = address}/>
      );
    }
    const isAchieved = ({address, achievementId}) => {
      return true;
    }
    return (
      <div>
        <Switch>
              <Route path='/search' component={SearchPage} />
              <Route exact path='/results' component={() => <Result achievements={this.state.achievements} choosenAddress = {this.state.choosen} isAchieved={isAchieved}/>} />
              <Redirect to="/search" />
        </Switch>
      </div>
    );
  }
}

export default Main;