import { combineReducers } from 'redux';

import status from './statusReducer';
import meals from './mealsReducer';

export default combineReducers({
  status,
  meals
});
