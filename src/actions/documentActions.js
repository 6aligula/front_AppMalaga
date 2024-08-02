// actions/documentActions.js
import axios from 'axios';
import {
    DOCUMENTO_LIST_REQUEST,
    DOCUMENTO_LIST_SUCCESS,
    DOCUMENTO_LIST_FAIL,
    DOCUMENTO_CREATE_REQUEST,
    DOCUMENTO_CREATE_SUCCESS,
    DOCUMENTO_CREATE_FAIL,
    DOCUMENTO_DETAILS_REQUEST,
    DOCUMENTO_DETAILS_SUCCESS,
    DOCUMENTO_DETAILS_FAIL,
} from '../constants/documentConstants';

export const listDocumentos = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DOCUMENTO_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/documentos/', config);

        dispatch({
            type: DOCUMENTO_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DOCUMENTO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const createDocumento = (documento) => async (dispatch, getState) => {
    try {
        dispatch({ type: DOCUMENTO_CREATE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.post('/api/documentos/nuevo/', documento, config);

        dispatch({
            type: DOCUMENTO_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DOCUMENTO_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const getDocumentoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DOCUMENTO_DETAILS_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get(`/api/documentos/${id}/`, config);

        dispatch({
            type: DOCUMENTO_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DOCUMENTO_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
