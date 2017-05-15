import React, { Component } from 'react';
import { connect } from 'react-redux';

import MealView from '../components/MealView';
import { addToCart } from '../actions/cartActions';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);


class MealContainer extends Component{
  static navigationOptions = ({ navigation }) => ({
    //title: `${capitalize(navigation.state.params.page)}`,
    header: null
  });
  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.currentPage = params.page
    this.state = {
      plates : this.props.meals[this.currentPage] || [],
      currentInput: '',
      modalVisible: false,
      selectedPlate: {}
    };
  }


  handleSearch = (text) => {
    this.setState({
      plates: this.props.meals[this.currentPage].filter((p) => p.name.toLowerCase().includes(text.toLowerCase()))
    });
  }

  handleOpenModal = (plate) => {
    this.setState({
      modalVisible: true,
      selectedPlate: plate
    });
  }

  handleCloseModal = () => {
    this.setState({
      modalVisible: false
    });
  };

handleAddMealToCart = (id, name, price) => {
  const cartPlate = {
    id : id,
    category: this.currentPage,
    name: name,
    quantity: 1,
    price: price
  };
  this.props.dispatch(addToCart(cartPlate));
};

goBack = () => {
  const { navigate } = this.props.navigation;
  navigate('Menus');
}

  render(){

    return(<MealView
      title={this.currentPage}
      handleSearch={this.handleSearch}
      currentInput={this.state.currentInput}
      plates={this.state.plates}
      isLogged={this.props.isLogged}
      modalVisible={this.state.modalVisible}
      selectedPlate={this.state.selectedPlate}
      handleOpenModal={this.handleOpenModal}
      handleCloseModal={this.handleCloseModal}
      handleAddMealToCart={this.handleAddMealToCart}
      currentPage={capitalize(this.currentPage)}
      goBack={this.goBack}
      />);
  }
}

const mapStateToProps = (state, action) => ({
    loading: state.status.loading,
    isLogged: state.status.user.isLogged,
    error: state.status.error,
    meals: state.meals
});
export default connect(mapStateToProps)(MealContainer);
