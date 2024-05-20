import {
    PARCELA_CARACTERISTICAS_LIST_REQUEST,
    PARCELA_CARACTERISTICAS_LIST_SUCCESS,
    PARCELA_CARACTERISTICAS_LIST_FAIL,
    PARCELA_USOS_LIST_REQUEST,
    PARCELA_USOS_LIST_SUCCESS,
    PARCELA_USOS_LIST_FAIL,
} from '../constants/parcelaConstants'

export const caracteristicasParcelaListReducer = (state = { caracteristicas: [] }, action) => {
    switch (action.type) {
        case PARCELA_CARACTERISTICAS_LIST_REQUEST:
            return { loading: true, caracteristicas: [] };
        case PARCELA_CARACTERISTICAS_LIST_SUCCESS:
            return { loading: false, caracteristicas: action.payload };
        case PARCELA_CARACTERISTICAS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const usosParcelaListReducer = (state = { usosParcela: [] }, action) => {
    switch (action.type) {
        case PARCELA_USOS_LIST_REQUEST:
            return { loading: true, usosParcela: [] };
        case PARCELA_USOS_LIST_SUCCESS:
            return { loading: false, usosParcela: action.payload };
        case PARCELA_USOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};