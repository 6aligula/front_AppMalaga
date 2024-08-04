// actions/facturaActions.js
import axios from 'axios';
import {
    FACTURA_LIST_REQUEST,
    FACTURA_LIST_SUCCESS,
    FACTURA_LIST_FAIL,
    FACTURA_DETAILS_REQUEST,
    FACTURA_DETAILS_SUCCESS,
    FACTURA_DETAILS_FAIL,
} from '../constants/facturaConstants';

export const listFacturas = () => async (dispatch, getState) => {
    try {
        dispatch({ type: FACTURA_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/facturas/all/', config);

        dispatch({
            type: FACTURA_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: FACTURA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const getFacturaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: FACTURA_DETAILS_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'application/pdf',
            },
            responseType: 'blob',
        };

        const { data } = await axios.get(`/api/facturas/${id}/pdf/`, config);
        const url = window.URL.createObjectURL(new Blob([data]));

        dispatch({
            type: FACTURA_DETAILS_SUCCESS,
            payload: url
        });
    } catch (error) {
        dispatch({
            type: FACTURA_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
