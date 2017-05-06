import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMeals } from '../actions/mealsActions';
import MealsView from '../components/MealsView';

class MealsContainer extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.meals.otros.length === 0 && this.props.meals.bocadillos.length === 0 && this.props.meals.combinados.length === 0){
      this.props.dispatch(fetchMeals());
    }
  }

  handleNavigation = (page) => {
    console.warn('click', page);
    const { navigate } = this.props.navigation;
    navigate('Meal', { page: page });
  }

  render(){
    console.warn(JSON.stringify(this.props));
    return (<MealsView handleNavigation={this.handleNavigation}/>);
  }
}

const mapStateToProps = (state, action) => ({
  meals : state.meals,
  loading : state.status.loading
});

export default connect(mapStateToProps)(MealsContainer);
