import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetCart } from '../actions/cartActions';
import Confirmed from '../components/Confirmed';
import LoadingPage from '../components/LoadingPage';

class ConfirmedContainer extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.resume = {
      count: params.count,
      username: params.author
    };
  }

  navigateToInit = () => {
    this.props.dispatch(resetCart());
    const { navigate } = this.props.navigation;
    navigate('Main');
  };

  render(){
    if(this.props.loading){
      return (<LoadingPage />);
    }else{
    return(
      <Confirmed
        navigateToInit={this.navigateToInit}
        resume={this.resume}
        />
    );
    }
  }
}

const mapStateToProps = (state, action) => ({
  loading: state.status.loading
});

export default connect(mapStateToProps)(ConfirmedContainer);
