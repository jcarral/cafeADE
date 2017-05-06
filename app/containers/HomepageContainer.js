import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/statusActions';

import Homepage from '../components/Homepage.js';

class HomepageContainer extends Component{
  constructor(props){
    super(props);
  }

  handleNavigationLogout = () => {
    this.props.dispatch(logout());
  }

  handleNavigationLogin = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render(){
    return (<Homepage
      isLogged={this.props.isLogged}
      handleNavigationLogout={this.handleNavigationLogout}
      handleNavigationLogin={this.handleNavigationLogin}

      />);
  }
}

const mapStateToProps = (state, action) => ({
  isLogged: state.status.user.isLogged
})


export default connect(mapStateToProps)(HomepageContainer);
