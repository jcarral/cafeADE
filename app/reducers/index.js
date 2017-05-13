import { combineReducers } from 'redux';

import status from './statusReducer';
import meals from './mealsReducer';
import cart from './cartReducer';

export default combineReducers({
  status,
  meals,
  cart
});
