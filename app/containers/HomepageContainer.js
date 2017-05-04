import React, { Component } from 'react';
import { connect } from 'react-redux';

import Homepage from '../components/Homepage.js';

class HomepageContainer extends Component{
  constructor(props){
    super(props);
  }

  handleNavigation = () => {
    const { navigate } = this.props.navigation;
    navigate('Meals');
  }

  handleNavigationLogin = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render(){
    return (<Homepage
      isLogged={this.props.isLogged}
      handleNavigation={this.handleNavigation}
      handleNavigationLogin={this.handleNavigationLogin}

      />);
  }
}

const mapStateToProps = (state, action) => ({
  isLogged: state.status.user.isLogged
})


export default connect(mapStateToProps)(HomepageContainer);
