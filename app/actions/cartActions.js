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
    payload.comment = data.comment;
    if(data.takeaway){
      payload.address = data.address;
    }
    let orderCount = 0;
    const dbRef = firebase.database().ref('orders');
    dbRef.once('value')
      .then((snap) => snap.val())
      .then((data) => Object.keys(data || {}).length)
      .then((count) =>{ orderCount= count;
        return dbRef.push({
        ...payload,
        count
      })})
      .then(() => callback(orderCount, data.author))
      .then(() => ({
        type: c.CONFIRM_CART
      }))
      .then(() => dispatch(endLoading()))
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
