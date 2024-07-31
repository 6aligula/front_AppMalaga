import axios from 'axios';
import {
    PARCELA_CARACTERISTICAS_LIST_REQUEST,
    PARCELA_CARACTERISTICAS_LIST_SUCCESS,
    PARCELA_CARACTERISTICAS_LIST_FAIL,
    PARCELA_USOS_LIST_REQUEST,
    PARCELA_USOS_LIST_FAIL,
    PARCELA_USOS_LIST_SUCCESS,
    PARCELA_CONTADORES_LIST_REQUEST,
    PARCELA_CONTADORES_LIST_SUCCESS,
    PARCELA_CONTADORES_LIST_FAIL,
    PARCELA_CONSUMOS_LIST_REQUEST,
    PARCELA_CONSUMOS_LIST_SUCCESS,
    PARCELA_CONSUMOS_LIST_FAIL,
    PARCELA_DATOS_ADICIONALES_LIST_FAIL,
    PARCELA_DATOS_ADICIONALES_LIST_REQUEST,
    PARCELA_DATOS_ADICIONALES_LIST_SUCCESS,
    PARCELA_PAGOS_LIST_REQUEST,
    PARCELA_PAGOS_LIST_SUCCESS,
    PARCELA_PAGOS_LIST_FAIL

} from '../constants/parcelaConstants';

export const listPagosParcela = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PARCELA_PAGOS_LIST_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };
        const { data } = await axios.get('/api/parcelas/control-pagos/', config);
        dispatch({
            type: PARCELA_PAGOS_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PARCELA_PAGOS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}


export const listDatosAdicionalesParcela = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PARCELA_DATOS_ADICIONALES_LIST_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };
        const { data } = await axios.get('/api/parcelas/datos-adicionales/', config);
        dispatch({
            type: PARCELA_DATOS_ADICIONALES_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PARCELA_DATOS_ADICIONALES_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};


export const listConsumosParcela = () => async (dispatch, getState) => {
   try{
         dispatch({ type: PARCELA_CONSUMOS_LIST_REQUEST });
    
         const { userLogin: { userInfo } } = getState();
    
         const config = {
              headers: {
                Authorization: `Bearer ${userInfo.token}`
              }
         };
    
         const { data } = await axios.get('/api/parcelas/consumos/', config);
         //console.log(data);
    
         dispatch({
              type: PARCELA_CONSUMOS_LIST_SUCCESS,
              payload: data
         });
    
   }catch (error) {
    dispatch({
        type: PARCELA_CONSUMOS_LIST_FAIL,
        payload: error.response && error.response.data.detail 
            ? error.response.data.detail 
            : error.message,
    });
}
}

export const listContadoresParcela = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PARCELA_CONTADORES_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/parcelas/contadores-medidas/', config);
        console.log("contadores parcelas: ",data);

        dispatch({
            type: PARCELA_CONTADORES_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PARCELA_CONTADORES_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}

export const listCaracteristicasParcela = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PARCELA_CARACTERISTICAS_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/parcelas/caracteristicas-parcela/', config);
        //console.log("caracteristicas de la parcela: ", data);

        dispatch({
            type: PARCELA_CARACTERISTICAS_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PARCELA_CARACTERISTICAS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}

export const listUsosParcela = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PARCELA_USOS_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('/api/parcelas/usos-parcela/', config);

        console.log("usos de la parcela: ", data);

        dispatch({
            type: PARCELA_USOS_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PARCELA_USOS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};