import axios from 'axios';
import {
    INCIDENCIA_LIST_REQUEST,
    INCIDENCIA_LIST_SUCCESS,
    INCIDENCIA_LIST_FAIL,
    INCIDENCIA_CREATE_REQUEST,
    INCIDENCIA_CREATE_SUCCESS,
    INCIDENCIA_CREATE_FAIL,
} from '../constants/incidenciaConstants';

export const listIncidencias = () => async (dispatch, getState) => {
    try {
        dispatch({ type: INCIDENCIA_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/incidencias/obtener/', config);

        dispatch({
            type: INCIDENCIA_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: INCIDENCIA_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const createIncidencia = (incidencia) => async (dispatch, getState) => {
    try {
        dispatch({ type: INCIDENCIA_CREATE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.post('/api/incidencias/crear/', incidencia, config);

        dispatch({
            type: INCIDENCIA_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: INCIDENCIA_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
