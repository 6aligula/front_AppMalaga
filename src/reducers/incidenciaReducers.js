import {
    INCIDENCIA_LIST_REQUEST,
    INCIDENCIA_LIST_SUCCESS,
    INCIDENCIA_LIST_FAIL,
    INCIDENCIA_CREATE_REQUEST,
    INCIDENCIA_CREATE_SUCCESS,
    INCIDENCIA_CREATE_FAIL,
} from '../constants/incidenciaConstants';

export const incidenciaListReducer = (state = { incidencias: [] }, action) => {
    switch (action.type) {
        case INCIDENCIA_LIST_REQUEST:
            return { loading: true, incidencias: [] };
        case INCIDENCIA_LIST_SUCCESS:
            return { loading: false, incidencias: action.payload };
        case INCIDENCIA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const incidenciaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case INCIDENCIA_CREATE_REQUEST:
            return { loading: true };
        case INCIDENCIA_CREATE_SUCCESS:
            return { loading: false, success: true, incidencia: action.payload };
        case INCIDENCIA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
