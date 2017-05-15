import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import LoadingPage from '../components/LoadingPage';

import {incrementPlate, decrementPlate, confirmCart } from '../actions/cartActions';

class CartContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  constructor(props){
    super(props);
    this.state = {
      takeaway : false,
      address: '',
      comment: ''
    }
  }


  handleIncrementPlate = (id, category) => {
    this.props.dispatch(incrementPlate(id, category));
  }

  handleDecrementPlate = (id, category, quantity) => {
    this.props.dispatch(decrementPlate(id, category, quantity));

  }

  handleComment = (text) => {
    this.setState({comment: text});
  }

  handleConfirmCard = (price) => {
    const { navigate } = this.props.navigation;

    this.props.dispatch(confirmCart({
      ...this.state,
       price: price,
       date: Date.now(),
       author: this.props.username
     }, this.props.cart, (count, author) => (navigate('Confirm', { count: count, author: author })))
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
      handleComment={this.handleComment}
      />);
  }
}

const mapStateToProps = (state, action) => ({
  loading: state.status.loading,
  cart: state.cart,
  username: state.status.user.username
});

export default connect(mapStateToProps)(CartContainer);
