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
    REQUEST_CALL_SUCCESS,
    REQUEST_CALL_FAILURE,
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_FAILURE,
    GET_FAQ_REQUEST,
    GET_FAQ_SUCCESS,
    GET_FAQ_FAILURE,
    GET_BANNERS_REQUEST,
    GET_BANNERS_SUCCESS,
    GET_BANNERS_FAILURE,
    GET_TEST_REQUEST,
    GET_TEST_SUCCESS,
    GET_TEST_FAILURE
} from "../actionType";

const initialState = {
    loading: false,
    centers: [],
    error: null,
    testimonials: [],
    banners: [],
    faq: [],
    sampleBlogs: [],
    requestCallMessage: '',
    books: [],
    tests:[]
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CENTERS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_CENTERS_SUCCESS:
            return { ...state, loading: false, centers: action.payload };
        case FETCH_CENTERS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case GET_TESTIMONIALS_REQUEST:
            return { ...state, loading: true };
        case GET_TESTIMONIALS_SUCCESS:
            return { ...state, loading: false, testimonials: action.payload };
        case GET_TESTIMONIALS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case GET_SAMPLE_VIDEO_REQUEST:
            return { ...state, loading: true };
        case GET_SAMPLE_VIDEO_SUCCESS:
            return { ...state, loading: false, sampleBlogs: action.payload };
        case GET_SAMPLE_VIDEO_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case REQUEST_CALL_SUCCESS:
            return {
                ...state,
                requestCallMessage: action.payload,
                error: '',
            };
        case REQUEST_CALL_FAILURE:
            return {
                ...state,
                requestCallMessage: '',
                error: action.payload,
            };

        case GET_BOOKS_REQUEST:
            return { ...state, loading: true };
        case GET_BOOKS_SUCCESS:
            return { ...state, loading: false, books: action.payload };
        case GET_BOOKS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case GET_FAQ_REQUEST:
            return { ...state, loading: true };
        case GET_FAQ_SUCCESS:
            return { ...state, loading: false, faq: action.payload };
        case GET_FAQ_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_FAQ_REQUEST:
            return { ...state, loading: true };
        case GET_FAQ_SUCCESS:
            return { ...state, loading: false, faq: action.payload };
        case GET_FAQ_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_BANNERS_REQUEST:
            return { ...state, loading: true };
        case GET_BANNERS_SUCCESS:
            return { ...state, loading: false, banners: action.payload };
        case GET_BANNERS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_TEST_REQUEST:
            return { ...state, loading: true };
        case GET_TEST_SUCCESS:
            return { ...state, loading: false, tests: action.payload };
        case GET_TEST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default homeReducer;
