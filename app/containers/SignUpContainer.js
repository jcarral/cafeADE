import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp';
import LoadingPage from '../components/LoadingPage';

import { signUp } from '../actions/statusActions';

class SignUpContainer extends Component {
  static navigationOptions = {
    title: 'Registro'
  }

  constructor(props){
    super(props);
    this.state = {
      username : '',
      pwd: '',
      email: ''
    };
  }

  handleUsername = (e) => {
    this.setState({username: e});
  }

  handlePwd = (e) => {
    this.setState({pwd: e});
  }

  handleEmail = (e) => {
    this.setState({email: e});
  }

  handleSubmit = () => {
    this.props.dispatch(signUp(this.state))
  }

  render(){
    if(this.props.loading){
      return (<LoadingPage />);
    }else{
      return (
        <SignUp
          handlePwd={this.handlePwd}
          handleUsername={this.handleUsername}
          handleEmail={this.handleEmail}
          handleSubmit={this.handleSubmit}
          error={this.props.error}
          pwd={this.state.pwd}
          name={this.state.username}
          email={this.state.email}
          />
      );
    }
  }
}

const mapStateToProps = (state, action) => ({
  error: state.status.error,
  loading: state.status.loading
});

export default connect(mapStateToProps)(SignUpContainer);
