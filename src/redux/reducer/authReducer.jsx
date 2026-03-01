// redux/reducers/authReducer.js

import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  SET_EMAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST
} from "../actionType";

const initialState = {
  loading: false,
  token: null,
  role: null,
  error: null,
  data:null,
  forgotMessage: null,
  otpVerified: false,
  otpMessage: '',
  email: '',
  passwordUpdated: false,
  progress: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        role: action.payload.role,
        data: action.payload,
        progress: 100,
        error: null,
      };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGOUT_SUCCESS:
      return {
        ...state,
      };

    case LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };


    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        forgotMessage: null,
        error: null,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotMessage: action.payload,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case VERIFY_OTP_REQUEST:
      return { ...state, loading: true, error: null };

    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otpVerified: true,
        otpMessage: action.payload,
      };

    case VERIFY_OTP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_EMAIL:
      return { ...state, email: action.payload };

    case UPDATE_PASSWORD_REQUEST:
      return { ...state, error: null };

    case UPDATE_PASSWORD_SUCCESS:
      return { ...state, passwordUpdated: true };

    case UPDATE_PASSWORD_FAILURE:
      return { ...state, error: action.payload };


    default:
      return state;
  }
};

export default authReducer;
