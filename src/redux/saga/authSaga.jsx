// redux/saga/authSaga.js

import { call, put, takeLeading, select } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  verifyOtpSuccess,
  verifyOtpFailure,
  setEmail,
  updatePasswordSuccess,
  updatePasswordFailure,
} from "../actions/authActions";
import { postRequest } from "../../utlis/apiRequest";
import {
  BASE_URL,
  LOGIN_URL,
  REGISTER_URL,
  FORGOT_PASSWORD_URL,
  VERIFY_OTP_URL,
  UPDATE_PASSWORD_URL,
} from "../../config/constant";
import * as actionTypes from "../actionType";
import { navigate } from "../../utlis/navigate";
import toast from "react-hot-toast";

// LOGIN SAGA
function* loginSaga(action) {
  try {
    const response = yield call(postRequest, {
      url: `${BASE_URL + LOGIN_URL}`,
      payload: action.payload,
    });

    if (response?.status === "success" && response?.role === "admin") {
      yield put(loginFailure("Admin Cannot Access Here"));
      return toast.error("Admin Cannot Access Here");
    }
    if (response?.status === "success") {
      toast.success(response.message || "Login successful");
      yield put(loginSuccess(response));
      localStorage.setItem("login", JSON.stringify(response));
      navigate("/lms");
    } else {
      toast.error(response.message || "Login failed");
      yield put(loginFailure(response.message || "Login failed"));
    }
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);

    const errorMessage =
      error?.response?.data?.message || error?.message || "Login failed";

    toast.error(errorMessage);
    yield put(loginFailure(errorMessage));
  }
}

// LOGOUT
function* logoutSaga() {
  localStorage.clear();
  // window.location.href="/login";
  window.location.href = "/login";
}

// REGISTER SAGA
function* registerSaga(action) {
  try {
    console.log("Register saga triggered with payload:", action.payload);

    const response = yield call(postRequest, {
      url: `${BASE_URL + REGISTER_URL}`,
      payload: action.payload,
    });

    console.log("API response:", response);

    if (response?.message == "User registered") {
      toast.success(response.message || "Registration successful");
      yield put(registerSuccess(response));
      navigate("/login");
    } else {
      toast.error(response.message || "Registration failed");
      yield put(registerFailure(response.message || "Registration failed"));
    }
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);

    const errorMessage =
      error?.response?.data?.message || error?.message || "Registration failed";

    toast.error(errorMessage);
    yield put(registerFailure(errorMessage));
  }
}

// FORGOT PASSWORD SAGA
function* forgotPasswordSaga(action) {
  try {
    console.log("Forgot Password saga triggered with payload:", action.payload);

    const response = yield call(postRequest, {
      url: `${BASE_URL + FORGOT_PASSWORD_URL}`,
      payload: { email: action.payload },
    });

    console.log("Forgot Password API response:", response);

    if (response?.message === "OTP sent to email") {
      toast.success(response.message || "OTP sent to your email");
      yield put(setEmail(action.payload));
      yield put(forgotPasswordSuccess(response.message));
    } else {
      toast.error(response.message || "Something went wrong");
      yield put(
        forgotPasswordFailure(response.message || "Something went wrong")
      );
    }
  } catch (error) {
    console.error(
      "Forgot Password error:",
      error.response?.data || error.message
    );

    const errorMessage =
      error?.response?.data?.message || error?.message || "Request failed";

    toast.error(errorMessage);
    yield put(forgotPasswordFailure(errorMessage));
  }
}

// VERIFY OTP SAGA
function* verifyOtpSaga(action) {
  try {
    console.log("Verify OTP saga triggered with payload:", action.payload);
    const response = yield call(postRequest, {
      url: `${BASE_URL + VERIFY_OTP_URL}`,
      payload: action.payload,
    });

    if (response?.message === "OTP verified successfully") {
      toast.success(response.message);
      yield put(verifyOtpSuccess(response.message));
    } else {
      toast.error(response.message || "Verification failed");
      yield put(verifyOtpFailure(response.message || "Verification failed"));
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";
    toast.error(errorMsg);
    yield put(verifyOtpFailure(errorMsg));
  }
}

function* updatePasswordSaga(action) {
  try {
    const email = yield select((state) => state.auth.email);

    const payload = {
      email,
      newPassword: action.payload.newPassword,
      cpassword: action.payload.cpassword,
    };

    const response = yield call(postRequest, {
      url: BASE_URL + UPDATE_PASSWORD_URL,
      payload,
    });

    if (response?.message === "Password updated successfully") {
      toast.success(response.message);
      yield put(updatePasswordSuccess(response.message));
    } else {
      toast.error(response.message || "Something went wrong");
      yield put(updatePasswordFailure(response.message));
    }
  } catch (error) {
    const message =
      error?.response?.data?.message || error.message || "Request failed";
    toast.error(message);
    yield put(updatePasswordFailure(message));
  }
}

export default function* watchAuthSaga() {
  console.log("watchAuthSaga running");
  yield takeLeading(actionTypes.LOGIN_REQUEST, loginSaga);
  yield takeLeading(actionTypes.REGISTER_REQUEST, registerSaga);
  yield takeLeading(actionTypes.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLeading(actionTypes.VERIFY_OTP_REQUEST, verifyOtpSaga);
  yield takeLeading(actionTypes.UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
  yield takeLeading(actionTypes.LOGOUT_REQUEST, logoutSaga);
}
