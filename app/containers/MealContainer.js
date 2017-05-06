import React, { Component } from 'react';
import { connect } from 'react-redux';

import MealView from '../components/MealView';

class MealContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      plates : [],
      currentInput: ''
    };
  }

  handleSearch = (text) => {
    this.setState({
      plates: this.state.plates.filter((p) => p.title.contains(text))
    });
  }


  render(){
    const { params } = this.props.navigation.state;
    const currentPage = params.page
    return(<MealView
      title={currentPage}
      handleSearch={this.handleSearch}
      currentInput={this.state.currentInput}
      plates={this.props.meals[currentPage]}
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
