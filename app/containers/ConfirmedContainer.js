import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetCart } from '../actions/cartActions';
import Confirmed from '../components/Confirmed';

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
    return(
      <Confirmed
        navigateToInit={this.navigateToInit}
        resume={this.resume}
        />
    );
  }
}

const mapStateToProps = (state, action) => ({

});

export default connect(mapStateToProps)(ConfirmedContainer);
