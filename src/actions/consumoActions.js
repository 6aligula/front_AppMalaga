import axios from 'axios';
import {
    CONSUMO_ESTADISTIC_LIST_REQUEST,
    CONSUMO_ESTADISTIC_LIST_SUCCESS,
    CONSUMO_ESTADISTIC_LIST_FAIL,
} from '../constants/consumoConstants';

export const listConsumos = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CONSUMO_ESTADISTIC_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/consumos/', config);
        //console.log(data);

        dispatch({
            type: CONSUMO_ESTADISTIC_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CONSUMO_ESTADISTIC_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
