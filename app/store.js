import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers/index.js';

const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducers, middleware);
