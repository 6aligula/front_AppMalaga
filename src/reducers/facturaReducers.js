// reducers/facturaReducers.js
import {
    FACTURA_LIST_REQUEST,
    FACTURA_LIST_SUCCESS,
    FACTURA_LIST_FAIL,
    FACTURA_DETAILS_REQUEST,
    FACTURA_DETAILS_SUCCESS,
    FACTURA_DETAILS_FAIL,
    FACTURA_GENERATE_PDF_REQUEST,
    FACTURA_GENERATE_PDF_SUCCESS,
    FACTURA_GENERATE_PDF_FAIL,
} from '../constants/facturaConstants';

export const facturaListReducer = (state = { facturas: [] }, action) => {
    switch (action.type) {
        case FACTURA_LIST_REQUEST:
            return { loading: true, facturas: [] };
        case FACTURA_LIST_SUCCESS:
            return { loading: false, facturas: action.payload };
        case FACTURA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const facturaDetailsReducer = (state = { pdfUrl: null }, action) => {
    switch (action.type) {
        case FACTURA_DETAILS_REQUEST:
            return { loading: true };
        case FACTURA_DETAILS_SUCCESS:
            return { loading: false, pdfUrl: action.payload };
        case FACTURA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const facturaGeneratePdfReducer = (state = {}, action) => {
    switch (action.type) {
        case FACTURA_GENERATE_PDF_REQUEST:
            return { loading: true };
        case FACTURA_GENERATE_PDF_SUCCESS:
            return { loading: false, success: true };
        case FACTURA_GENERATE_PDF_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};