import axios from 'axios';
import {
    PETICION_LIST_REQUEST,
    PETICION_LIST_SUCCESS,
    PETICION_LIST_FAIL,
    PETICION_CREATE_REQUEST,
    PETICION_CREATE_SUCCESS,
    PETICION_CREATE_FAIL,
} from '../constants/peticionConstants';

export const listPeticiones = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PETICION_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/peticiones/obtener/', config);

        dispatch({
            type: PETICION_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PETICION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const createPeticion = (peticion) => async (dispatch, getState) => {
    try {
        dispatch({ type: PETICION_CREATE_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.post('/api/peticiones/crear/', peticion, config);

        dispatch({
            type: PETICION_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PETICION_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
