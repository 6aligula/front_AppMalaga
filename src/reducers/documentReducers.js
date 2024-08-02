// reducers/documentReducers.js
import {
    DOCUMENTO_LIST_REQUEST,
    DOCUMENTO_LIST_SUCCESS,
    DOCUMENTO_LIST_FAIL,
    DOCUMENTO_CREATE_REQUEST,
    DOCUMENTO_CREATE_SUCCESS,
    DOCUMENTO_CREATE_FAIL,
    DOCUMENTO_CREATE_RESET,
    DOCUMENTO_DETAILS_REQUEST,
    DOCUMENTO_DETAILS_SUCCESS,
    DOCUMENTO_DETAILS_FAIL,
} from '../constants/documentConstants';

export const documentoListReducer = (state = { documentos: [] }, action) => {
    switch (action.type) {
        case DOCUMENTO_LIST_REQUEST:
            return { loading: true, documentos: [] };
        case DOCUMENTO_LIST_SUCCESS:
            return { loading: false, documentos: action.payload };
        case DOCUMENTO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const documentoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCUMENTO_CREATE_REQUEST:
            return { loading: true };
        case DOCUMENTO_CREATE_SUCCESS:
            return { loading: false, success: true, documento: action.payload };
        case DOCUMENTO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case DOCUMENTO_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const documentoDetailsReducer = (state = { documento: {} }, action) => {
    switch (action.type) {
        case DOCUMENTO_DETAILS_REQUEST:
            return { loading: true, ...state };
        case DOCUMENTO_DETAILS_SUCCESS:
            return { loading: false, documento: action.payload };
        case DOCUMENTO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
