import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart';

class CartContainer extends Component {
  constructor(props){
    super(props);
  }

  handleRemoveItemFromList = () => {

  }

  handleConfirmCard = () => {

  }

  render(){
    return (<Cart />);
  }
}

const mapStateToProps = (state, action) => ({
  loading: state.status.loading
});

export default connect(mapStateToProps)(CartContainer);
