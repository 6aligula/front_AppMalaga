import {
    CONSUMO_ESTADISTIC_LIST_REQUEST,
    CONSUMO_ESTADISTIC_LIST_SUCCESS,
    CONSUMO_ESTADISTIC_LIST_FAIL,
} from '../constants/consumoConstants';

export const consumoEstadisticReducer = (state = { consumos: [] }, action) => {
    switch (action.type) {
        case CONSUMO_ESTADISTIC_LIST_REQUEST:
            return { loading: true, consumos: [] };
        case CONSUMO_ESTADISTIC_LIST_SUCCESS:
            return { loading: false, consumos: action.payload };
        case CONSUMO_ESTADISTIC_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
