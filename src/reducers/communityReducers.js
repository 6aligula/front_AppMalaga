import {
    COMUNIDAD_DETAILS_REQUEST,
    COMUNIDAD_DETAILS_SUCCESS,
    COMUNIDAD_DETAILS_FAIL,
    COMUNIDAD_DETAILS_RESET,

    COMUNIDAD_UPDATE_PROFILE_REQUEST,
    COMUNIDAD_UPDATE_PROFILE_SUCCESS,
    COMUNIDAD_UPDATE_PROFILE_FAIL,
    COMUNIDAD_UPDATE_PROFILE_RESET
} from "../constants/comunidadConstants";

export const comunidadDetailsReducer = (state = { comunidad: {} }, action) => {
    switch (action.type) {
        case COMUNIDAD_DETAILS_REQUEST:
            return { loading: true, ...state }
        case COMUNIDAD_DETAILS_SUCCESS:
            return { loading: false, comunidad: action.payload }
        case COMUNIDAD_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case COMUNIDAD_DETAILS_RESET:
            return { comunidad: {} }
        default:
            return state
    }
}

export const comunidadUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case COMUNIDAD_UPDATE_PROFILE_REQUEST:
            return { loading: true }
        case COMUNIDAD_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, comunidadInfo: action.payload }
        case COMUNIDAD_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        case COMUNIDAD_UPDATE_PROFILE_RESET:
            return {}
        default:
            return state
    }
}