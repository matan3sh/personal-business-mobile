import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import alertReducer from './alert/reducer';
import contactReducer from './contact/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  contact: contactReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
