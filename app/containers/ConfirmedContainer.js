import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetCart } from '../actions/cartActions';
import Confirmed from '../components/Confirmed';

class ConfirmedContainer extends Component {
  constructor(props){
    super(props);
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
        resume={{}}
        />
    );
  }
}

const mapStateToProps = (state, action) => ({

});

export default connect(mapStateToProps)(ConfirmedContainer);
