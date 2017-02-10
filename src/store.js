import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';

//import reducers
import comments from './ducks/comments';

import logger from 'redux-logger';

const middleware = applyMiddleware(promise(), logger());
const reducers = combineReducers({comments});
const store = createStore(reducers, middleware);

//store.dispatch({ type: 'comments/FETCH' });

export default store;
