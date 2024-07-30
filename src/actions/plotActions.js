// src/actions/plotActions.js
import axios from 'axios';
import {
    PLOT_LIST_REQUEST,
    PLOT_LIST_SUCCESS,
    PLOT_LIST_FAIL,
} from '../constants/plotConstants';

export const listPlots = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PLOT_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get('/api/geo/get/plot/', config);
        //console.log('Plot Data:', data); // Log the data received from backend

        dispatch({
            type: PLOT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PLOT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
