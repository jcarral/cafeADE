import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomepageContainer from './HomepageContainer';
import MealsContainer from './MealsContainer';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import CartContainer from './CartContainer';
import MealContainer from './MealContainer';

class AppRouter extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let userTypeTabs = {};
    if(this.props.isLogged){
      userTypeTabs = {
        Home: {screen: HomepageContainer},
        Meals: {screen: MealsContainer},
        Cart: {screen: CartContainer}
      }
    }else{
      userTypeTabs = {
        Home: {screen: HomepageContainer},
        Meals: {screen: MealsContainer},
        Login: {screen: LoginContainer}
      }
    }
    const TabNavigation = TabNavigator(userTypeTabs);

    const AppNavigation = StackNavigator({
    	Main: {screen: TabNavigation},
      Login: {screen: LoginContainer},
      Meal: {screen: MealContainer},
    	SignUp: {screen: SignUpContainer}
    })


    return (<AppNavigation />);
  }
}

const mapStateToProps = (state, action) => ({
  isLogged: state.status.user.isLogged,
  role: state.status.user.role
});

export default connect(mapStateToProps)(AppRouter);
