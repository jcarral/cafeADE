import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import LoadingPage from '../components/LoadingPage';
import { login, resetError } from '../actions/statusActions';

class LoginContainer extends Component{
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      username: '',
      pwd: ''
    };
  }

  handleUsername = (e) => {
  	this.setState({username: e});
  }

  handlePwd = (e) => {
  	this.setState({pwd: e});
  }

  handleLogIn = () => {
    this.props.dispatch(login(this.state.username, this.state.pwd))
  }

  handleNavigationSignUp = () => {
    const { navigate } = this.props.navigation;
    navigate('SignUp');
  }

  render(){
    if(this.props.loading){
      return (<LoadingPage />);
    }else{
      return (<Login
        handlePwd={this.handlePwd}
        handleUsername={this.handleUsername}
        handleLogIn={this.handleLogIn}
        pwd={this.state.pwd}
        name={this.state.username}
        error={this.props.error}
        handleNavigationSignUp={this.handleNavigationSignUp}
        />);
    }

  }
}
const mapStateToProps = (state, action) => {
	return {
    loading: state.status.loading,
    error: state.status.error
  };
}

export default connect(mapStateToProps)(LoginContainer);
