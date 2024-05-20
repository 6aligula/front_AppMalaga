import {
    PARCELA_CARACTERISTICAS_LIST_REQUEST,
    PARCELA_CARACTERISTICAS_LIST_SUCCESS,
    PARCELA_CARACTERISTICAS_LIST_FAIL,
    PARCELA_USOS_LIST_REQUEST,
    PARCELA_USOS_LIST_SUCCESS,
    PARCELA_USOS_LIST_FAIL,
    PARCELA_CONTADORES_LIST_REQUEST,
    PARCELA_CONTADORES_LIST_SUCCESS,
    PARCELA_CONTADORES_LIST_FAIL,
    PARCELA_CONSUMOS_LIST_REQUEST,
    PARCELA_CONSUMOS_LIST_SUCCESS,
    PARCELA_CONSUMOS_LIST_FAIL,
    PARCELA_DATOS_ADICIONALES_LIST_REQUEST,
    PARCELA_DATOS_ADICIONALES_LIST_SUCCESS,
    PARCELA_DATOS_ADICIONALES_LIST_FAIL,
    PARCELA_PAGOS_LIST_REQUEST,
    PARCELA_PAGOS_LIST_SUCCESS,
    PARCELA_PAGOS_LIST_FAIL

} from '../constants/parcelaConstants'

export const pagosParcelaListReducer = (state = { controlDePagos: [] }, action) => {
    switch (action.type) {
        case PARCELA_PAGOS_LIST_REQUEST:
            return { loading: true, controlDePagos: [] };
        case PARCELA_PAGOS_LIST_SUCCESS:
            return { loading: false, controlDePagos: action.payload };
        case PARCELA_PAGOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const datosAdicionalesParcelaListReducer = (state = { datosAdicionales: [] }, action) => {
    switch (action.type) {
        case PARCELA_DATOS_ADICIONALES_LIST_REQUEST:
            return { loading: true, datosAdicionales: [] };
        case PARCELA_DATOS_ADICIONALES_LIST_SUCCESS:
            return { loading: false, datosAdicionales: action.payload };
        case PARCELA_DATOS_ADICIONALES_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const consumosParcelaListReducer = (state = { consumos: [] }, action) => {
    switch (action.type) {
        case PARCELA_CONSUMOS_LIST_REQUEST:
            return { loading: true, consumos: [] };
        case PARCELA_CONSUMOS_LIST_SUCCESS:
            return { loading: false, consumos: action.payload };
        case PARCELA_CONSUMOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const contadoresParcelaListReducer = (state = { contadores: [] }, action) => {
    switch (action.type) {
        case PARCELA_CONTADORES_LIST_REQUEST:
            return { loading: true, contadores: [] };
        case PARCELA_CONTADORES_LIST_SUCCESS:
            return { loading: false, contadores: action.payload };
        case PARCELA_CONTADORES_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

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