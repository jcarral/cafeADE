import * as c from '../constants/orderTypes';

export default function(state = [], action){
  switch (action.type) {
    case c.ORDERS_FETCHED:
      return action.payload;
    case c.ORDER_FINISHED:
      return state;
    default:
      return state;
  }
}
