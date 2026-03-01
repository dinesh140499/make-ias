// redux/actions/authActions.js

import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE, FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE, VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  SET_EMAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS
} from "../actionType";

export const loginRequest = (payload) => {
  console.log("Login request payload:::", payload);
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logoutRequest = (payload) => {
  console.log("Logout request payload:::", payload);
  return {
    type: LOGOUT_REQUEST,
    payload,
  };
};

export const logoutSuccess = (data) => ({
  type: LOGOUT_SUCCESS,
  payload: data,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const forgotPasswordRequest = (email) => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: email,
});

export const forgotPasswordSuccess = (message) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: message,
});

export const forgotPasswordFailure = (error) => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: error,
});

export const verifyOtpRequest = (payload) => ({
  type: VERIFY_OTP_REQUEST,
  payload,
});

export const verifyOtpSuccess = (message) => ({
  type: VERIFY_OTP_SUCCESS,
  payload: message,
});

export const verifyOtpFailure = (error) => ({
  type: VERIFY_OTP_FAILURE,
  payload: error,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const updatePasswordRequest = (payload) => ({
  type: UPDATE_PASSWORD_REQUEST,
  payload,
});

export const updatePasswordSuccess = (message) => ({
  type: UPDATE_PASSWORD_SUCCESS,
  payload: message,
});

export const updatePasswordFailure = (error) => ({
  type: UPDATE_PASSWORD_FAILURE,
  payload: error,
});


