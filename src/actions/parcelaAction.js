import axios from 'axios';
import {
    PARCELA_CARACTERISTICAS_LIST_REQUEST,
    PARCELA_CARACTERISTICAS_LIST_SUCCESS,
    PARCELA_CARACTERISTICAS_LIST_FAIL,
    PARCELA_USOS_LIST_REQUEST,
    PARCELA_USOS_LIST_FAIL,
    PARCELA_USOS_LIST_SUCCESS,
} from '../constants/parcelaConstants';

export const listCaracteristicasParcela = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PARCELA_CARACTERISTICAS_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/parcelas/caracteristicas-parcela/', config);
        //console.log(data);

        dispatch({
            type: PARCELA_CARACTERISTICAS_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PARCELA_CARACTERISTICAS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}

export const listUsosParcela = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PARCELA_USOS_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/parcelas/usos-parcela/', config);

        dispatch({
            type: PARCELA_USOS_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PARCELA_USOS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};