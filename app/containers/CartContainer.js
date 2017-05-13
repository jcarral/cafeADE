import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import LoadingPage from '../components/LoadingPage';

import {incrementPlate, decrementPlate, confirmCart } from '../actions/cartActions';

class CartContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Cart`,
  });
  constructor(props){
    super(props);
    this.state = {
      takeaway : false,
      address: '',
    }
  }


  handleIncrementPlate = (id, category) => {
    this.props.dispatch(incrementPlate(id, category));
  }

  handleDecrementPlate = (id, category, quantity) => {
    this.props.dispatch(decrementPlate(id, category, quantity));

  }

  handleConfirmCard = (price) => {
    const { navigate } = this.props.navigation;

    this.props.dispatch(confirmCart({
      ...this.state,
       price: price,
       date: Date.now(),
       author: 'UsuarioX'
     }, this.props.cart, navigate('Confirm'))
   );
  }

  handleToggleTakeAway = () => {
    this.setState({
      takeaway: !this.state.takeaway
    });
  }

  handleAddress = (text) => {
      this.setState({
        address: text
      });
  };

  render(){
    console.log('Props: ', this.props.cart);
    let price = this.props.cart.reduce((total, plate) => (total + (parseFloat(plate.price)*plate.quantity)), 0);
    price = (this.state.takeaway)?price*1.1:price;

    if(this.props.loading) return (<LoadingPage />);
    return (<Cart
      handleIncrementPlate={this.handleIncrementPlate}
      handleDecrementPlate={this.handleDecrementPlate}
      handleConfirmCard={this.handleConfirmCard}
      cart={this.props.cart}
      takeaway={this.state.takeaway}
      address={this.state.address}
      price={price}
      handleToggleTakeAway={this.handleToggleTakeAway}
      handleAddress={this.handleAddress}
      />);
  }
}

const mapStateToProps = (state, action) => ({
  loading: state.status.loading,
  cart: state.cart
});

export default connect(mapStateToProps)(CartContainer);
