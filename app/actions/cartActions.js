import * as c from '../constants/cartTypes';
import * as firebase from 'firebase';

import { startLoading, endLoading, errorFetching } from './statusActions';

export function incrementPlate(id, category){
  return {
    type: c.INCREMENT_PLATE,
    payload: {
      id,
      category
    }
  };
}

export function decrementPlate(id, category, quantity){
  return {
    type: c.DECREMENT_PLATE,
    payload: {
      id,
      category,
      quantity
    }
  };
}

export function confirmCart(data, meals, callback){
  return (dispatch) => {
    startLoading();
    let payload = {};
    payload.meals = meals;
    payload.active = true;
    payload.price = data.price;
    payload.author = data.author;
    payload.date = data.date;
    if(data.takeaway){
      payload.address = data.address;
    }
    console.log(payload);
    const dbRef = firebase.database().ref('orders');
    dbRef
      .push(payload)
      .then(() => ({
        type: c.CONFIRM_CART
      }))
      .then(() => dispatch(endLoading()))
      .then(() => callback())
      .catch((e) => dispatch(errorFetching(e)))
  }
}

export function resetCart(){
  return {
    type: c.RESET_CART
  };
}

export function addToCart(plate){
  return {
    type: c.ADD_PLATE,
    payload: plate
  };
}
