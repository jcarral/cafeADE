import * as firebase from 'firebase';

import * as c from '../constants/orderTypes';
import { startLoading, endLoading, errorFetching } from './statusActions';
import { filterByStatus } from '../utils/parseFirebase';

export function fetchOrders(){
  console.log('Fetching orders...');
  return (dispatch) => {
      dispatch(startLoading());
      const dbRef = firebase.database().ref('orders');
      dbRef.on('value', (res) => ordersFetched(res, dispatch), (e) => ordersError(e, dispatch));
  };
}

const ordersFetched = (res, dispatch) => {
  let data = res.val();
  data = filterByStatus(data);
  dispatch(endLoading());
  dispatch({
    type: c.ORDERS_FETCHED,
    payload: data
  });
};

const ordersError = (e, dispatch) => dispatch(errorFetching(e));


export function finishOrder(order){
  return (dispatch) => {
    startLoading();
    const dbRef = firebase.database().ref('orders');
    dbRef.once('value')
        .then(snap => snap.val())
        .then(data => {
          const currentKey = Object.keys(data).filter((key) => {
            const current = data[key];

            return current.count === order.count
          })[0];

          const dbRef = firebase.database().ref('orders').child(currentKey);
          dbRef.update({active: false});
        })
        .then(() => dispatch({
          type: ORDER_FINISHED,
          payload: currentKey
        }))
        .then(() => dispatch(endLoading()))
        .catch((e) => errorFetching(e));
  }
}
