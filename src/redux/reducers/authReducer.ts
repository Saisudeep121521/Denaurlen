import { STORE_USERNAME, STORE_FORM_DATA, REMOVE_FORM_DATA } from '../actions/actionTypes';
import { SignupFormData } from '../actions/authActions';

interface AuthState {
  username: string | null;
  formData: SignupFormData | null;
  // Add other state properties as needed
}

const initialState: AuthState = {
  username: null,
  formData: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case STORE_USERNAME:
      return { ...state, username: action.payload.username };
    case STORE_FORM_DATA:
      return { ...state, formData: action.payload };
    case REMOVE_FORM_DATA:
      return { ...state, formData: null };
    default:
      return state;
  }
};

export default authReducer;
