import React, { Component } from 'react';

import MealsView from '../components/MealsView';

export default class MealsContainer extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.warn(JSON.stringify(this.props));
  }

  render(){
    return (<MealsView list={[]} />);
  }
}
