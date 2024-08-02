// actions/cultivoActions.js
import axios from 'axios';
import {
    CULTIVO_LIST_REQUEST,
    CULTIVO_LIST_SUCCESS,
    CULTIVO_LIST_FAIL,
    CULTIVO_DETAILS_REQUEST,
    CULTIVO_DETAILS_SUCCESS,
    CULTIVO_DETAILS_FAIL,
    FASE_CULTIVO_DETAILS_REQUEST,
    FASE_CULTIVO_DETAILS_SUCCESS,
    FASE_CULTIVO_DETAILS_FAIL,
} from '../constants/cultivoConstants';

export const listCultivos = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CULTIVO_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/inventario/cultivos', config);

        dispatch({
            type: CULTIVO_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CULTIVO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const getCultivoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CULTIVO_DETAILS_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get(`/api/inventario/cultivos/${id}`, config);

        dispatch({
            type: CULTIVO_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CULTIVO_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const getFaseCultivoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: FASE_CULTIVO_DETAILS_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get(`/api/inventario/fases_cultivo/${id}`, config);

        dispatch({
            type: FASE_CULTIVO_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: FASE_CULTIVO_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
