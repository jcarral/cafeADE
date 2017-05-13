import * as firebase from 'firebase';

import * as c from '../constants/mealsTypes';
import { startLoading, endLoading, errorFetching } from './statusActions';
import { parseMeals } from '../utils/parseFirebase';

export function fetchMeals(){
  return (dispatch) => {
    dispatch(startLoading());

    const dbRef = firebase.database().ref('meals');
    dbRef
      .once('value')
      .then((snap)  => snap.val())
      .then((data) => parseMeals(data))
      .then((meals) => dispatch({
        type: c.MEALS_FETCHED,
        payload: meals
      }))
      .then(() => dispatch(endLoading()))
      .catch((e) => dispatch(errorFetching(e)));
  };
}
