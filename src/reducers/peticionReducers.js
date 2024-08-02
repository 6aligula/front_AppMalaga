import {
    PETICION_LIST_REQUEST,
    PETICION_LIST_SUCCESS,
    PETICION_LIST_FAIL,
    PETICION_CREATE_REQUEST,
    PETICION_CREATE_SUCCESS,
    PETICION_CREATE_FAIL,
} from '../constants/peticionConstants';

export const peticionListReducer = (state = { peticiones: [] }, action) => {
    switch (action.type) {
        case PETICION_LIST_REQUEST:
            return { loading: true, peticiones: [] };
        case PETICION_LIST_SUCCESS:
            return { loading: false, peticiones: action.payload };
        case PETICION_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const peticionCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PETICION_CREATE_REQUEST:
            return { loading: true };
        case PETICION_CREATE_SUCCESS:
            return { loading: false, success: true, peticion: action.payload };
        case PETICION_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
