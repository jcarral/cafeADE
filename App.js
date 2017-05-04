import React, { Component} from 'react';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import HomepageContainer from './app/containers/HomepageContainer';
import MealsContainer from './app/containers/MealsContainer';
import LoginContainer from './app/containers/LoginContainer';
import SignUpContainer from './app/containers/SignUpContainer';

const config = {
	apiKey: "AIzaSyD2CXr6xiswW1PI9AHGu9mUQfvQPsAzqDk",
	authDomain: "cafeade-60822.firebaseapp.com",
	databaseURL: "https://cafeade-60822.firebaseio.com",
	projectId: "cafeade-60822",
	storageBucket: "cafeade-60822.appspot.com",
	messagingSenderId: "993801274264"
};
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    console.warn(HomepageContainer);
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

const AppNavigation = StackNavigator({
  Main: {screen: HomepageContainer},
  Meals: {screen: MealsContainer},
  Login: {screen: LoginContainer},
	SignUp: {screen: SignUpContainer}
});
