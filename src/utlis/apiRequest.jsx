import axios from 'axios';

export const postRequest = async ({
  url = null,
  data = null,
  payload = null,
  header = 'json',
}) => {
  try {
    const response = await axios({
      method: 'post',
      url: url,
      data: payload || data || {},
      headers: {
        'Content-Type':
          header === 'json' ? 'application/json' : 'multipart/form-data',
      },
    });

    return response.data;
  } catch (e) {
    console.log('Axios error:', e.response?.data || e.message);
    throw e; 
  }
};



export const getRequest = async ({url = null, data = null}) => {
  try {
    const response = await axios({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data) {
      return response.data;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};
