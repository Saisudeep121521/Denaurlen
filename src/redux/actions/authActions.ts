// src/redux/actions/authActions.ts

// Import action types
import { STORE_USERNAME, REMOVE_USERNAME, STORE_FORM_DATA, REMOVE_FORM_DATA } from './actionTypes';

// Define the interface for signup form data
interface SignupFormData {
  firstName: string;
  lastName: string;
  email:string;
  location:string;
  username:string;
  password:string;
}

// Action creator to store the username
export const storeUsername = (username: string) => ({
  type: STORE_USERNAME,
  payload: { username }, // Payload contains the username
});

// Action creator to remove the username
export const removeUsername = () => ({
  type: REMOVE_USERNAME,
});

// Action creator to store the form data
export const storeFormData = (formData: SignupFormData) => ({
  type: STORE_FORM_DATA,
  payload: formData, // Payload contains the signup form data
  
});

// Action creator to remove the form data
export const removeFormData = () => ({
  type: REMOVE_FORM_DATA,
});
