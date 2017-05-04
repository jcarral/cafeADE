import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp';
import LoadingPage from '../components/LoadingPage';

class SignUpContainer extends Component {
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
    console.warn(JSON.stringify(this.state));
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
