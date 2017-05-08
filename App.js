import React, { Component} from 'react';
import { Provider } from 'react-redux';
import store from './app/store.js';
import * as firebase from 'firebase';

import AppRouter from './app/containers/AppRouter';

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
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
