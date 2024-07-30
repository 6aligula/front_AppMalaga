// src/reducers/plotReducer.js
import {
    PLOT_LIST_REQUEST,
    PLOT_LIST_SUCCESS,
    PLOT_LIST_FAIL,
} from '../constants/plotConstants';

export const plotListReducer = (state = { plots: [] }, action) => {
    switch (action.type) {
        case PLOT_LIST_REQUEST:
            return { loading: true, plots: [] };
        case PLOT_LIST_SUCCESS:
            return { loading: false, plots: action.payload };
        case PLOT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
