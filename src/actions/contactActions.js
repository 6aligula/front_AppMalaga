import axios from 'axios';
import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
} from '../constants/contactConstants';

export const sendContactForm = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/contact/add/', formData, config);

    dispatch({
      type: CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
