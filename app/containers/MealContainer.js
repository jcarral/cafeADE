import React, { Component } from 'react';
import { connect } from 'react-redux';

import MealView from '../components/MealView';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
class MealContainer extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: `${capitalize(navigation.state.params.page)}`,
  });
  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.currentPage = params.page
    this.state = {
      plates : this.props.meals[this.currentPage] || [],
      currentInput: ''
    };
  }


  handleSearch = (text) => {
    this.setState({
      plates: this.props.meals[this.currentPage].filter((p) => p.name.toLowerCase().includes(text.toLowerCase()))
    });
  }


  render(){

    return(<MealView
      title={this.currentPage}
      handleSearch={this.handleSearch}
      currentInput={this.state.currentInput}
      plates={this.state.plates}
      isLogged={this.props.isLogged}
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
