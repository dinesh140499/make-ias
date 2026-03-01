// export const BASE_URL = 'http://localhost:65285/api/';
export const BASE_URL = 'https://makeias-api.iqsetters.com/api/';

export const IMAGE_BASE_URL = 'https://makeias-api.iqsetters.com/'; // Image URL
//  export const IMAGE_BASE_URL = 'http://localhost:65285/'; // Image URL



//authSaga
export const LOGIN_URL = `auth/login`;
export const REGISTER_URL = `auth/register`;
export const FORGOT_PASSWORD_URL = `auth/forgot-password`;
export const VERIFY_OTP_URL = 'auth/verify-otp';
export const UPDATE_PASSWORD_URL = 'auth/update-password';


//centerSaga
export const GET_CENTERS_URL = 'admin/lernerCentre/getAll';
export const GET_BANNERS = 'admin/lernerCentre/getAllBanner';
export const GET_TESTIMONIAL_URL = 'testimonials/getAll';
export const GET_SAMPLE_VIDEO_URL = 'admin/lernerCentre/sampleBlogs/getAll';
export const REQUEST_CALL_API = 'requestCall/add';
export const BOOKS_API = 'admin/lernerCentre/booksAndNotes/getAll';
export const GET_FAQ_API = 'admin/lernerCentre/faq/getAll';
export const GET_TESTS_API = 'testSeries/getUpComingTest';