// src/redux/reducers/loginReducer.ts

import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes';

interface LoginState {
  isAuthenticated: boolean;
  // Add other state properties as needed
}

const initialState: LoginState = {
  isAuthenticated: false,
  // Initialize other state properties
};

const loginReducer = (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default loginReducer;
