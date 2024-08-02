// reducers/cultivoReducers.js
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

export const cultivoListReducer = (state = { cultivos: [] }, action) => {
    switch (action.type) {
        case CULTIVO_LIST_REQUEST:
            return { loading: true, cultivos: [] };
        case CULTIVO_LIST_SUCCESS:
            return { loading: false, cultivos: action.payload };
        case CULTIVO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const cultivoDetailsReducer = (state = { cultivo: {} }, action) => {
    switch (action.type) {
        case CULTIVO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CULTIVO_DETAILS_SUCCESS:
            return { loading: false, cultivo: action.payload };
        case CULTIVO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const faseCultivoDetailsReducer = (state = { faseCultivo: {} }, action) => {
    switch (action.type) {
        case FASE_CULTIVO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case FASE_CULTIVO_DETAILS_SUCCESS:
            return { loading: false, faseCultivo: action.payload };
        case FASE_CULTIVO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
