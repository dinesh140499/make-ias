import { call, put, takeLeading } from "redux-saga/effects";
import { getRequest, postRequest } from "../../utlis/apiRequest"; // central GET helper
import * as actionTypes from "../actionType";
import {
    fetchCentersSuccess,
    fetchCentersFailure,
    getTestimonialsSuccess,
    getTestimonialsFailure,
    getSampleVideoSuccess,
    getSampleVideoFailure,
    requestCallSuccess,
    requestCallFailure,
    getBooksSuccess,
    getBooksFailure,
    requestFaqSuccess,
    requestFaqFailure,
    getBannersSuccess,
    getBannersFailure,
    getTestSuccess,
    getTestFailure,
} from "../actions/homeActions";
import { BASE_URL, GET_CENTERS_URL, GET_TESTIMONIAL_URL, GET_SAMPLE_VIDEO_URL, REQUEST_CALL_API, BOOKS_API, GET_FAQ_API, GET_BANNERS, GET_TESTS_API } from "../../config/constant";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';

function* fetchCentersSaga() {
    try {
        const response = yield call(getRequest, {
            url: `${BASE_URL + GET_CENTERS_URL}`,
        });
        if (response?.lernerCentres) {
            yield put(fetchCentersSuccess(response.lernerCentres));
        } else {
            yield put(fetchCentersFailure("No centers found"));
        }
    } catch (error) {
        const message =
            error?.response?.data?.message || error.message || "Failed to fetch centers";
        toast.error(message);
        yield put(fetchCentersFailure(message));
    }
}



function* getTestimonialsSaga() {
    try {
        const response = yield call(getRequest, {
            url: `${BASE_URL + GET_TESTIMONIAL_URL}`,
        });
        yield put(getTestimonialsSuccess(response.testimonials));
    } catch (error) {
        yield put(getTestimonialsFailure(error.message || 'Failed to fetch testimonials'));
    }
}

function* getSampleVideoSaga() {
    try {
        const response = yield call(getRequest, {
            url: `${BASE_URL + GET_SAMPLE_VIDEO_URL}`,
        });
        yield put(getSampleVideoSuccess(response.sampleBlogs));
    } catch (error) {
        yield put(getSampleVideoFailure(error.message || 'Failed to fetch testimonials'));
    }
}

function* handleRequestCallAdd(action) {
    try {
        const response = yield call(postRequest, {
            url: `${BASE_URL + REQUEST_CALL_API}`,
            payload: action.payload,
        });

        if (response?.message === "Request call added successfully") {
            toast.success(response.message);
            yield put(requestCallSuccess(response.message));
        } else {
            toast.error(response.message || "Something went wrong");
            yield put(requestCallFailure(response.message));
        }
    } catch (error) {
        const message = error?.response?.data?.message || error.message || "Request failed";
        toast.error(message);
        yield put(requestCallFailure(message));
    }
}

function* getBannersRequest() {
    try {
        const response = yield call(getRequest, {
            url: `${BASE_URL + GET_BANNERS}`,
        });
        yield put(getBannersSuccess(response));
    } catch (error) {
        yield put(getBannersFailure(error.message || 'Failed to fetch banners'));
    }
}

function* getRequestFaq() {
    try {
        const response = yield call(getRequest, {
            url: `${BASE_URL + GET_FAQ_API}`,
        });
        yield put(requestFaqSuccess(response));
    } catch (error) {
        yield put(requestFaqFailure(error.message || 'Failed to fetch Faq'));
    }
}

function* getBooksSaga() {
    try {
        const response = yield call(getRequest, { url: `${BASE_URL}${BOOKS_API}` });
        yield put(getBooksSuccess(response.booksAndNotes));
    } catch (error) {
        yield put(getBooksFailure(error.message || "Failed to fetch books"));
    }
}

function* getRequestTests() {
    try {
        const response = yield call(getRequest, { url: `${BASE_URL}${GET_TESTS_API}` });
        yield put(getTestSuccess(response.data));
    } catch (error) {
        yield put(getTestFailure(error.message || "Failed to fetch books"));
    }
}


export default function* watchHomeSaga() {
    yield takeLeading(actionTypes.FETCH_CENTERS_REQUEST, fetchCentersSaga);
    yield takeLeading(actionTypes.GET_TESTIMONIALS_REQUEST, getTestimonialsSaga);
    yield takeLeading(actionTypes.GET_SAMPLE_VIDEO_REQUEST, getSampleVideoSaga);
    yield takeLeading(actionTypes.GET_FAQ_REQUEST, getRequestFaq);
    yield takeLeading(actionTypes.REQUEST_CALL_ADD, handleRequestCallAdd);
    yield takeLeading(actionTypes.GET_BOOKS_REQUEST, getBooksSaga);
    yield takeLeading(actionTypes.GET_BANNERS_REQUEST, getBannersRequest);
    yield takeLeading(actionTypes.GET_TEST_REQUEST, getRequestTests);
}
