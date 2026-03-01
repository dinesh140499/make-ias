import {
    FETCH_CENTERS_REQUEST,
    FETCH_CENTERS_SUCCESS,
    FETCH_CENTERS_FAILURE,
    GET_TESTIMONIALS_REQUEST,
    GET_TESTIMONIALS_SUCCESS,
    GET_TESTIMONIALS_FAILURE,
    GET_SAMPLE_VIDEO_REQUEST,
    GET_SAMPLE_VIDEO_SUCCESS,
    GET_SAMPLE_VIDEO_FAILURE,
    REQUEST_CALL_ADD,
    REQUEST_CALL_SUCCESS,
    REQUEST_CALL_FAILURE,
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_FAILURE,
    GET_FAQ_REQUEST,
    GET_FAQ_SUCCESS,
    GET_FAQ_FAILURE,
    GET_BANNERS_SUCCESS,
    GET_BANNERS_FAILURE,
    GET_BANNERS_REQUEST,
    GET_TEST_REQUEST,
    GET_TEST_SUCCESS,
    GET_TEST_FAILURE
} from "../actionType";

export const fetchCentersRequest = () => ({
    type: FETCH_CENTERS_REQUEST,
});

export const fetchCentersSuccess = (centers) => ({
    type: FETCH_CENTERS_SUCCESS,
    payload: centers,
});

export const fetchCentersFailure = (error) => ({
    type: FETCH_CENTERS_FAILURE,
    payload: error,
});

export const getTestimonialsRequest = () => ({
    type: GET_TESTIMONIALS_REQUEST,
});

export const getTestimonialsSuccess = (payload) => ({
    type: GET_TESTIMONIALS_SUCCESS,
    payload: payload,
});

export const getTestimonialsFailure = (error) => ({
    type: GET_TESTIMONIALS_FAILURE,
    payload: error,
});

export const getSampleVideoRequest = () => ({
    type: GET_SAMPLE_VIDEO_REQUEST,
});

export const getSampleVideoSuccess = (payload) => ({
    type: GET_SAMPLE_VIDEO_SUCCESS,
    payload: payload,
});

export const getSampleVideoFailure = (error) => ({
    type: GET_SAMPLE_VIDEO_FAILURE,
    payload: error,
});

export const requestCallAdd = (payload) => ({
    type: REQUEST_CALL_ADD,
    payload,
});

export const requestCallSuccess = (data) => ({
    type: REQUEST_CALL_SUCCESS,
    payload: data,
});

export const requestCallFailure = (error) => ({
    type: REQUEST_CALL_FAILURE,
    payload: error,
});

export const requestFaq = (payload) => ({
    type: GET_FAQ_REQUEST,
    payload,
});

export const requestFaqSuccess = (data) => ({
    type: GET_FAQ_SUCCESS,
    payload: data,
});

export const requestFaqFailure = (error) => ({
    type: GET_FAQ_FAILURE,
    payload: error,
});

export const getBannersSuccess = (payload) => ({
    type: GET_BANNERS_SUCCESS,
    payload: payload,
});

export const getBannersFailure = (error) => ({
    type: GET_BANNERS_FAILURE,
    payload: error,
});

export const requestBanners = (payload) => ({
    type: GET_BANNERS_REQUEST,
    payload,
});

export const getTestSuccess = (payload) => ({
    type: GET_TEST_SUCCESS,
    payload: payload,
});

export const getTestFailure = (error) => ({
    type: GET_TEST_FAILURE,
    payload: error,
});

export const requestTest = (payload) => ({
    type: GET_TEST_REQUEST,
    payload,
});

export const getBooksRequest = () => ({ type: GET_BOOKS_REQUEST });
export const getBooksSuccess = (books) => ({ type: GET_BOOKS_SUCCESS, payload: books });
export const getBooksFailure = (error) => ({ type: GET_BOOKS_FAILURE, payload: error });