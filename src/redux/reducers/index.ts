// src/redux/reducers/index.ts

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loginReducer from './loginReducer'; // Import your login reducer here

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer, 
});

export default rootReducer;
